import React from 'react'
import ListIcon from '../../assets/images/list.svg'
import { useNavigate } from 'react-router-dom'
import AdminRouteNames from '../../approutes/adminRoutes'

const Privileageadd = () => {

  
    return (
        <div>
            <div className="title-bar d-flex justify-content-between mb-30">
                <h1>Privilege Settings</h1>
                <button className="btn btn-blue" > <img src={ListIcon} alt="Add" /> <span>List</span></button>
            </div>

            <div className="white-box">
                <div className="mb-30">
                    <h3>General</h3>

                    <div className="row mb-16">
                        <div className="col-sm-6">
                            <label for="subname">Privilege Name <em>*</em></label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-sm-6">
                            <label for="subname">Permissions</label>
                            {/* <input type="text" name="subname" id="subname" /> */}
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-16">
                        <div className="col-sm-2">
                            <label for="subname">Users</label>
                        </div>
                        <div className="col-sm-2 checkbox_blk_add">
                            <input type="checkbox" />
                            <label for="subname">SelectAll</label>
                        </div>
                        <div className="col-sm-1 checkbox_blk_add">
                            <input type="checkbox" />
                            <label for="subname">View</label>
                        </div>
                        <div className="col-sm-1 checkbox_blk_add">
                            <input type="checkbox" />
                            <label for="subname">Add</label>
                        </div>
                        <div className="col-sm-1 checkbox_blk_add">
                            <input type="checkbox" />
                            <label for="subname">Edit</label>
                        </div>
                        <div className="col-sm-1 checkbox_blk_add">
                            <input type="checkbox" />
                            <label for="subname">Delete</label>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
            <div className="content-area-main-btn">
                <button className="content-btn">Cancel</button>
                <button className="content-primary-btn">Create</button>
            </div>
        </div>
    )
}

export default Privileageadd