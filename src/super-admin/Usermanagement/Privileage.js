import React from "react";
import AddIcon from '../../assets/images/add.svg'
import { useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'

const Privilege = () => {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate({ pathname: AdminRouteNames.Privileageadd })
    }
    return (
        <>
            <div class="title-bar d-flex justify-content-between">
                <h1>Privilege Settings</h1>
                <button class="btn btn-blue" onClick={handleClick}> <img src={AddIcon} alt="Add" /> <span>Add</span></button>
            </div>
        </>
    )
}



export default Privilege;