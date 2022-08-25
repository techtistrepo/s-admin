import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'
import { AdminRouteNames } from '../../approutes/route-constant'


const Modaltax = () => {

    const [lgShow, setLgShow] = useState(true);

    const navigate = useNavigate()

    const ModelOut = () => {
        setLgShow(false)
        navigate({ pathname: AdminRouteNames.Tax }) 
    }

    return (
        <div>
            <Modal
                className='Modal_content'
                size="lg"
                show={lgShow}
                onHide={ModelOut}
                aria-labelledby="example-modal-sizes-title-vcenter-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-vcenter-lg ">

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='Modal_blk'>
                        <h3>ADD TAX RATE</h3>
                    </div>
                    <div class="row mb-16">
                        <div class="col-sm-12">
                            <label for="Name">Name<em>*</em></label>
                            <input type="text" name="Name" id="Name" />
                        </div>
                    </div>
                    <div class="row mb-16">
                        <div class="col-sm-12">
                            <label for="Name">Tax Rate%<em>*</em></label>
                            <input type="text" name="Name" id="Name" />
                        </div>
                    </div>
                    <div class="content-area-main-btn-modalwindow">
                        <button class="content-btn" onClick={ModelOut}>Cancel</button>
                        <button class="content-primary-btn">Create</button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Modaltax