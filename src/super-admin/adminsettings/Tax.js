import React,{useState} from 'react'
import AddIcon from '../../assets/images/add.svg'
import {  useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'
import { Button } from 'react-bootstrap'

const Tax = () => {

    const [lgShow, setLgShow] = useState(false);

    const navigate = useNavigate()

    const handleClick = () => {
        setLgShow(true)
        navigate({ pathname: AdminRouteNames.Modaltax })
    }

    return (
        <div>
            <div class="title-bar d-flex justify-content-between">
                <h1>Tax List</h1>
                <Button onClick={handleClick}> <img src={AddIcon} alt="Add" /><span>Add</span></Button>
                {/* <button class="btn btn-blue" onClick={handleClick}> <img src={AddIcon} alt="Add" /><span>Add</span></button> */}
            </div>
        </div>
    )
}

export default Tax