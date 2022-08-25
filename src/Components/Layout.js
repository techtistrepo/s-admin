import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { withoutHeadersRoute, withoutSidebarRoutes } from '../utils/data'
import Header from './Header'
import Sidebar from './Sidebar'


const Layout = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState('dashboard')

    const location = useLocation()

    // console.log(location.pathname)

    const handleMenu = (menuName) => {
        setActiveMenu(menuName)
    }

    const getActiveMenu = () => {
        return activeMenu
    }

    return (
        <>
            <div>
                {
                    !withoutHeadersRoute.includes(location.pathname) && <div className='header'>
                        <Header getActiveMenu={getActiveMenu} />
                    </div>
                }

                <div className='content-area d-flex'>
                    {
                        !withoutSidebarRoutes.includes(location.pathname) && <div class="left-menu">
                            <Sidebar handleMenu={handleMenu} />
                        </div>
                    }
                    <div class="content-area-blk w-100">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout