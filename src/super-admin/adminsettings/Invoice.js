import React,{useState} from "react";
import AddIcon from '../../assets/images/add.svg'
import { useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'

import Button from "react-bootstrap/Button";
import Modal from 'react-bootstrap/Modal';


const Invoice = () => {

    const [lgShow, setLgShow] = useState(false);

    const navigate = useNavigate()

    const handleClick = () => {
        setLgShow(true)
        navigate({ pathname: AdminRouteNames.Modalwindow })
    }

    return (
        <div>
            <div class="title-bar d-flex justify-content-between">
                <h1>Invoice List</h1>
                <Button onClick={handleClick}> <img src={AddIcon} alt="Add" /><span>Add</span></Button>
                {/* <button class="btn btn-blue" onClick={handleClick}> <img src={AddIcon} alt="Add" /><span>Add</span></button> */}
            </div>
            <Modal
                className='Modal_content'
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-vcenter-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-vcenter-lg ">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="row mb-16">
                        <div class="col-sm-12">
                            <label for="Name">Name<em>*</em></label>
                            <input type="text" name="Name" id="Name" />
                        </div>
                    </div>
                    <div class="row mb-16">
                        <div class="col-sm-6">
                            <label for="prefix">Prefix<em>*</em></label>
                            <input type="text" name="prefix" id="prefix" />
                        </div>
                        <div class="col-sm-6">
                            <label for="startfrom">Start From</label>
                            <input type="text" name="startfrom" id="startfrom" />
                        </div>
                    </div>
                    <div class="row mb-16 d-flex align-items-center justify-content-flex-start">
                        <div class="col-sm-6">
                            <label for="numofdigits">Number Of Digits</label>
                            <input type="text" name="numofdigits" id="numofdigits" />
                        </div>
                        <div className="col-sm-2 mt-4 checkbox_blk">
                            {/* <label for="emailsubject" style={{visibility:"hidden"}}>Number Of Digits</label> */}
                            <input className='' type="checkbox" id="Default" name="Default" value="Default" />
                            <p>Default</p>
                        </div>
                    </div>
                    <div class="content-area-main-btn-modalwindow">
                        <button class="content-btn">Cancel</button>
                        <button class="content-primary-btn">Create</button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default Invoice;