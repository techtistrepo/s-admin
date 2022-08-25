import React from 'react'
import ListIcon from '../../assets/images/list.svg'
import Select from 'react-select'


const customStyles = {
    control: (base, state) => ({
      ...base,
      background: "#F9F9F9",
      // match with the menu
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      padding : "4px 8px",
      border : "1px solid #e8e8e8",
      // Overwrittes the different states of border
    //   borderColor: state.isFocused ? "yellow" : "green",
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        // Overwrittes the different states of border
        // borderColor: state.isFocused ? "red" : "blue"    
      }
    }),
    menu: base => ({
      ...base,
      // override border radius to match the box
      borderRadius: 0,
      // kill the gap
      marginTop: 0
    }),
    menuList: base => ({
      ...base,
      // kill the white space on first and last option
      padding: 0
    })
  }


const AddUser = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <>
            <div className="title-bar d-flex justify-content-between mb-30">
                <h1>Add Admin Users</h1>
                <button className="btn btn-blue"> <img src={ListIcon} alt="Add" /> <span>List</span></button>
            </div>

            <div className="white-box">
                <div className="mb-30">
                    <h3>General</h3>

                    <div className="row mb-16">
                        <div className="col-sm-3">
                            <label for="subname">First Name <em>*</em></label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                        <div className="col-sm-3">
                            <label for="activeusers">Last Name <em>*</em></label>
                            <input type="text" name="activeusers" id="activeusers" />
                        </div>
                        <div className="col-sm-1 checkbox_blk">
                            <input type="checkbox" id="Default" name="Default" value="Default" />
                            <span className='ml-3'>Default</span>
                        </div>
                    </div>

                    <h3>Role and Permissions</h3>

                    <div className="row mb-16">
                        <div className="col-sm-3">
                            <label for="subname">Email <em>*</em></label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                        <div className="col-sm-3">
                            <label for="activeusers">Role<em>*</em></label>
                            <div>
                              

                        <Select styles={customStyles} options={options} />
                        



                            </div>

                        </div>
                        <div className="col-sm-3 ">
                            <label for="subname">Password <em>*</em></label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                        <div className="col-sm-3 ">
                            <label for="subname">Confirm Password <em>*</em></label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                    </div>

                </div>

                <div>
                    <h3>More Information</h3>

                    <div className="row mb-16">
                        <div className="col-sm-3">
                            <label for="subname">Date of Birth </label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                        <div className="col-sm-3" >
                            <label for="activeusers">Gender</label>
                            <div>
                                <Select styles={customStyles} options={options} />
                            </div>
                        </div>
                        <div className="col-sm-3 ">
                            <label for="subname">Marital Status </label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                        <div className="col-sm-3 ">
                            <label for="subname">Mobile Number </label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                    </div>
                    <div className="row mb-16">
                        <div className="col-sm-3">
                            <label for="subname">Alternative Mobile Number</label>
                            <input type="text" name="subname" id="subname" />
                        </div>
                        <div className="col-sm-3">
                            <label for="activeusers">Home Contact Number</label>
                            <input type="text" name="subname" id="subname" />
                        </div>

                        <div class="col-sm-6">
                            <label for="emailbody">Address </label>
                            <textarea name="" id="" rows="6"></textarea>
                        </div>

                    </div>
                </div>
            </div>

            <div className="content-area-main-btn">
                <button className="content-btn">Cancel</button>
                <button className="content-primary-btn">Create</button>
            </div>
        </>

    )
}

export default AddUser