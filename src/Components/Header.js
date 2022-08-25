import React, { useEffect, useState } from 'react'
import userProfile from '../assets/images/userprofile.svg'
import Logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { subMenus } from '../utils/data'
import { AdminRouteNames } from '../approutes/route-constant'

const Header = ({ getActiveMenu }) => {

    const activeMenu = getActiveMenu ? getActiveMenu() : 'dashboard'
    const filteredMenu = subMenus.filter(item => activeMenu in item)
    const selectedMenu = filteredMenu[0][activeMenu]
    const [activeLink, setActiveLink] = useState({
        [selectedMenu.submenus && selectedMenu.submenus.length > 0 ? selectedMenu.submenus[0].menuName : 'dashboard'] : true
    })

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate({ pathname: '/admin/login' }, {
            replace: true
        })
    }

    const handleActive = (menuName) => {
        setActiveLink({
            [menuName]: true
        })
    }

    return (
        <div>
            <header class="d-flex">
                <div class="logo">
                    <Link to={AdminRouteNames.Dashboard}><img src={Logo} /></Link>
                </div>

                <div class="header-content d-flex justify-content-between align-items-center w-100">
                    <div class="header-title d-flex">
                        <img src={require(`../assets/images/${selectedMenu.menuIcon}`)} alt="Dashboard" width="28" height="28" /> <h1>{selectedMenu.menuName}</h1>
                    </div>
                    <div class="text-left secondary-menu">
                        <ul>
                            {
                                selectedMenu.submenus && selectedMenu.submenus.length > 0 && selectedMenu.submenus.map(item => (
                                    <li className={activeLink && activeLink[item.menuName] ? 'active' :  ''}><Link to={item.menuLink} onClick={()=> handleActive(item.menuName)}>{item.menuName}</Link></li>
                                ))
                            }
                        </ul>
                    </div>

                    <div class="">
                        <div class="dropdown show">
                            <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={userProfile} alt="userprofile" />
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" onClick={handleLogout}>Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header