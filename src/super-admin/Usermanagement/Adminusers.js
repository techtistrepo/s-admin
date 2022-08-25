import React from 'react'
import AddIcon from '../../assets/images/add.svg'
import {  useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'


const Adminusers = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate({ pathname: AdminRouteNames.AddUser })
  }


  return (
    // <div>
    //   <div class="title-bar d-flex justify-content-between">
    //     <h1>Admin Users</h1>
    //     <button class="btn btn-blue" onClick={handleClick}> <img src={AddIcon} alt="Add" /> <span>Add</span></button>
    //   </div>
    // </div>
    <div class="title-bar d-flex justify-content-between">
      <h1>Admin Users</h1>
      <button class="btn btn-blue" onClick={handleClick}> <img src={AddIcon} alt="Add" /> <span>Add</span></button>
    </div>
  )
}

export default Adminusers