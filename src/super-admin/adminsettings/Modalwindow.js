import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom'

import { AdminRouteNames } from '../../approutes/route-constant'

// import Button from 'react-bootstrap/Button';

const Modalwindow = () => {

  const [lgShow, setLgShow] = useState(true);

  const navigate = useNavigate()

  const ModelOut = () => {
    setLgShow(false)
    navigate({ pathname: AdminRouteNames.Invoice })
  }

  return (
    <>

      {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}

      <Modal

        size="lg"
        show={lgShow}
        onHide={ModelOut}
        aria-labelledby="example-modal-sizes-title-vcenter-lg"
        >

        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-vcenter-lg">

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className='Modal_content'>
          <div className='Modal_blk'>
            <h3>ADD INVOICE</h3>
          </div>
          <div class="row mb-16">
            <div class="col-sm-4">
              <label for="Name">Preview<em>*</em></label>
            </div>
            <div className='col-sm-3 Format_blk'>
              <span className='d-flex'>Format</span>
              <span>XXXX</span>
            </div>
            <div className='col-sm-3 ml-5 Format_blk'>
              <span className='d-flex'>Format</span>
            </div>
          </div>
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
              <span>Default</span>
            </div>
          </div>
          <div class="content-area-main-btn-modalwindow">
            <button class="content-btn" onClick={ModelOut}>Cancel</button>
            <button class="content-primary-btn">Create</button>
          </div>
        </Modal.Body>
      </Modal>

    </>
  );
}

export default Modalwindow;