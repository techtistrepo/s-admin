import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mainMenus } from '../utils/data'

const Sidebar = ({ handleMenu }) => {

    const [activeLink, setActiveLink] = useState({
        [mainMenus[0].menuName]: true
    })
    const handleClick = (menuName) => {
        handleMenu(menuName)
        setActiveLink({
            [menuName]: true
        })
    }

    return (
        <div>
            <div>
                <ul>
                    {/* <li><a href="#"><img src={rightIcon} alt="chevron" /></a></li>
                    <li><a href="#"><img src={Dash} alt="Dashboard" /></a></li>
                    <li><a href="#"><img src={superAdmin} alt="Super admin" /></a></li>
                    <li><a href="#"><img src={userIcon} alt="User management" /></a></li>
                    <li><a href="#"><img src={settingsIcon} alt="Settings" /></a></li> */}
                    {
                        mainMenus.map(item => (
                            <li className={activeLink[item.menuName] ? 'sidebar-active' : ''} key={item.menuName}>
                                <Link to={item.menuLink}
                                    onClick={() => handleClick(item.menuName)}>
                                    <img src={require(`../assets/images/${item.menuIcon}`)} />
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar