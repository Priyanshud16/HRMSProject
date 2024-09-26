import React, { useRef, useState } from 'react'
import './ShiftEditPage.scss'
import { HiUserPlus } from 'react-icons/hi2'
import { TfiClose } from 'react-icons/tfi'
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function ShiftEditPage() {
    const [FormData, setFormData] = useState({
        shiftname: '',
        startTime: '',
        endTime: '',
        numberOfEmployees: '',
        shiftDays: '',
        Duration: ''
    });
    const dropdownRef = useRef(null);

    const [state, setState] = useState({
        jobStatus: '', // Selected Job Status
        dropdowns: {
            jobStatus: false // Dropdown visibility state
        }
    });

    const navigate = useNavigate();

    const CloseClick = () => {
        navigate("/shiftManagementDetails");
    };

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const HandleSubmit = () => {
        console.log("form", FormData);
    };

    // Toggle dropdown visibility
    const handleDropdownToggle = (dropdown) => {
        setState((prevState) => ({
            ...prevState,
            dropdowns: {
                ...prevState.dropdowns,
                [dropdown]: !prevState.dropdowns[dropdown]
            }
        }));
    };

    // Handle dropdown selection
    const handleDropdownSelect = (dropdown, value) => {
        setState((prevState) => ({
            ...prevState,
            [dropdown]: value,
            dropdowns: {
                ...prevState.dropdowns,
                [dropdown]: false // Close the dropdown after selection
            }
        }));
    };

    return (
        <div>
            <div className="EmpOn_main_container">
                <div className="EmpOn_header">
                    <div className="top-bar">
                        <h2>
                            <div className='span'><HiUserPlus /></div>
                            Edit General Shift
                        </h2>
                        <span className="close_nav" onClick={CloseClick}><TfiClose /></span>
                    </div>
                </div>
            </div>

            <div id='ShiftEditForm'>
                <div className='shiftEditSection'>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName' style={{ color: "red" }}>Shift name*</span> <br />
                        <input
                            type="text"
                            placeholder='Enter Shift Name'
                            name="shiftname"
                            className='search22 AllShiftListInput'
                            onChange={HandleChange}
                            value={FormData.shiftname}
                            style={{ marginTop: "5px" }}
                        />
                    </div>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName'>Start Time</span> <br />
                        <input
                            type="time"
                            className='search22 AllShiftListInput'
                            style={{ marginTop: "5px" }}
                            onChange={HandleChange}
                            value={FormData.startTime}
                            name='startTime'
                        />
                    </div>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName'>End Time</span> <br />
                        <input
                            type="time"
                            className='search22 AllShiftListInput'
                            style={{ marginTop: "5px" }}
                            onChange={HandleChange}
                            value={FormData.endTime}
                            name='endTime'
                        />
                    </div>
                </div>

                <div className='shiftEditSection'>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName'>Number Of Employees</span> <br />
                        <input
                            type="text"
                            placeholder='Enter Number of Employees'
                            className='search22 AllShiftListInput'
                            style={{ marginTop: "5px" }}
                            onChange={HandleChange}
                            value={FormData.numberOfEmployees}
                            name='numberOfEmployees'
                        />
                    </div>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName'>Shift Days</span> <br />
                        <input
                            type="text"
                            placeholder='Enter number of Shift Days'
                            className='search22 AllShiftListInput'
                            style={{ marginTop: "5px" }}
                            onChange={HandleChange}
                            value={FormData.shiftDays}
                            name='shiftDays'
                        />
                    </div>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName'>Duration (Hours)</span> <br />
                        <input
                            type="text"
                            placeholder='Enter Number of Hours'
                            className='search22 AllShiftListInput'
                            style={{ marginTop: "5px" }}
                            onChange={HandleChange}
                            value={FormData.Duration}
                            name='Duration'
                        />
                    </div>
                </div>

                {/* Dropdown for Job Status */}
                <div className="AddNewInputBlock" style={{ marginTop: '15px',marginLeft:"20px" }}>
                    <label>Created By</label>
                    <div ref={dropdownRef} className="AddNewShiftDropDown" style={{ marginTop: '10px' }}>
                        <div
                            className="AddnewShiftdropdown-button"
                            style={{ padding: '5px' }}
                            onClick={() => handleDropdownToggle('jobStatus')}
                            
                        >
                            <div>{state.jobStatus || 'Select Job Status'}</div>
                            <span id="toggle_selectIcon">
                                {!state.dropdowns.jobStatus ? <IoIosArrowDown /> : <IoIosArrowUp />}
                            </span>
                        </div>

                        {state.dropdowns.jobStatus && (
                            <div className="AddNewShiftdropdown-menu">
                                <div className="dropdown-item" onClick={() => handleDropdownSelect('jobStatus', 'CEO')}>
                                    CEO
                                </div>
                                <div className="dropdown-item" onClick={() => handleDropdownSelect('jobStatus', 'HR')}>
                                    HR
                                </div>
                                <div className="dropdown-item" onClick={() => handleDropdownSelect('jobStatus', 'Manager')}>
                                    Manager
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className='Bottom'>
                <div className='Submitbtns'>
                    <button className='Sbtn' onClick={HandleSubmit}>
                        Update <IoIosArrowDropright />
                    </button>
                    <div id='crossBtn' style={{ border: "1px solid #B3B3B3" }}>
                        <TfiClose style={{ marginLeft: "3px", marginTop: "3px" }} />
                    </div>
                </div>
                <div className='NextSection'>
                    <div className='NxtBtn'><span>Next Page</span></div>
                    <div className='arrowContainer'>
                        <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                        </div>
                        <div className='arrow'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
    <path d="M10.5 8C10.5 8 13.5 10.946 13.5 12C13.5 13.0541 10.5 16 10.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShiftEditPage;
