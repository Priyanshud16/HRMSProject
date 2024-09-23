import React, { useReducer } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { CiCircleChevRight, CiMenuKebab } from 'react-icons/ci'
import '../../../Employee_onboarding/AddEmployee/AddEmloyee.scss'
import '../../../../Pages/Employee_onboarding/AddEmployee/NavbarForm.scss'
import { HiUserPlus } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { TfiClose } from 'react-icons/tfi'
import './AddNewShift.scss'

function AddNewShift() {

    // Initial state for the form and dropdowns
    const initialState = {
        shiftName: '',
        startTime: '',
        endTime: '',
        noOfEmploy: '',
        shiftDays: '',
        duration: '',
        jobStatus: '', 
        dropdowns: {
            jobStatus: false
        }
    };

    const reducer = (state, action) => {
        switch (action.type) {
            // Form field updates
            case 'shiftName':
                return { ...state, shiftName: action.payload };
            case 'startTime':
                return { ...state, startTime: action.payload };
            case 'endTime':
                return { ...state, endTime: action.payload };
            case 'noOfEmploy':
                return { ...state, noOfEmploy: action.payload };
            case 'shiftDays':
                return { ...state, shiftDays: action.payload };
            case 'duration':
                return { ...state, duration: action.payload };

            // Dropdown toggle and selection
            case 'toggleDropdown':
                return { 
                    ...state, 
                    dropdowns: {
                        ...state.dropdowns, 
                        [action.dropdown]: !state.dropdowns[action.dropdown]
                    }
                };
            case 'selectJobStatus':
                return { 
                    ...state, 
                    jobStatus: action.payload, 
                    dropdowns: { ...state.dropdowns, jobStatus: false }
                };

            default:
                return state;
        }
    };

    // useReducer to manage form state
    const [state, dispatch] = useReducer(reducer, initialState);

    // Helper function to handle input changes
    const handleChange = (type, value) => {
        dispatch({ type, payload: value });
    };

    return (
        <div>
            <div className="EmpOn_main_container">
                <div className="EmpOn_header">
                    <div className="top-bar">
                        <h2>
                            <div className='span'><HiUserPlus /></div>
                            Add New Shift <p>98 total</p>
                        </h2>
                        <span className="close_nav"><TfiClose /></span>
                    </div>
                </div>
            </div>

            <div id='form'>
                <div className='first-section'>
                    <div className='Input-Blocks'>
                        <div className='input-name'>
                            <span style={{ color: "#E51F1F" }}>Shift name*</span>
                            <input type="text" style={{ marginTop: "5px" }} placeholder='Enter Shift Name' 
                                   value={state.shiftName}
                                   onChange={(e) => handleChange("shiftName", e.target.value)} />
                        </div>
                    </div>
                    <div className='Input-Blocks'>
                        <div className='input-name'>
                            <span>Start Time</span>
                            <input type="text" style={{ marginTop: "5px" }} placeholder='Choose Start Time'
                                   value={state.startTime}
                                   onChange={(e) => handleChange("startTime", e.target.value)} />
                        </div>
                    </div>
                    <div className='Input-Blocks'>
                        <div className='input-name'>
                            <span>End Time</span>
                            <input type="text" style={{ marginTop: "5px" }} placeholder='Choose End Time' 
                                   value={state.endTime}
                                   onChange={(e) => handleChange("endTime", e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className='second-section'>
                    <div className='Input-Blocks'>
                        <div className='input-name'>
                            <span>Number Of Employees</span>
                            <input type="text" style={{ marginTop: "5px" }} placeholder="Enter number of employees" 
                                   value={state.noOfEmploy}
                                   onChange={(e) => handleChange("noOfEmploy", e.target.value)} />
                        </div>
                    </div>
                    <div className='Input-Blocks'>
                        <div className='input-name'>
                            <span>Shift Days</span>
                            <input type="time" style={{ marginTop: "5px" }} placeholder="Enter number of shift days" 
                                   value={state.shiftDays}
                                   onChange={(e) => handleChange("shiftDays", e.target.value)} />
                        </div>
                    </div>
                    <div className='Input-Blocks'>
                        <div className='input-name'>
                            <span>Duration (Hours)</span>
                            <input type="time" style={{ marginTop: "5px" }} placeholder="Enter number of hours" 
                                   value={state.duration}
                                   onChange={(e) => handleChange("duration", e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className='Input-Blocks' style={{ marginTop: "15px" }}>
                    <label>Created By</label>
                    <div className="dropdown" style={{marginTop:"10px"}}>
                        <div className="dropdown-button" style={{ padding: "5px" }} onClick={() => dispatch({ type: 'toggleDropdown', dropdown: 'jobStatus' })}>
                            <div>{state.jobStatus || "Select Job Status"}</div>
                            <span id='toggle_selectIcon'> {!state.dropdowns.jobStatus ? <IoIosArrowDown /> : <IoIosArrowUp />} </span>
                        </div>

                        {state.dropdowns.jobStatus && (
                            <div className="dropdown-menu">
                                <div className="dropdown-item" onClick={() => dispatch({ type: 'selectJobStatus', payload: 'CEO' })}>CEO</div>
                                <div className="dropdown-item" onClick={() => dispatch({ type: 'selectJobStatus', payload: 'HR' })}>HR</div>
                                <div className="dropdown-item" onClick={() => dispatch({ type: 'selectJobStatus', payload: 'Manager' })}>Manager</div>
                            </div>
                        )}
                        {
                            console.log(state.jobStatus)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNewShift;
