import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { CiCircleChevRight, CiMenuKebab } from 'react-icons/ci';
import '../../../Employee_onboarding/AddEmployee/AddEmloyee.scss';
import '../../../../Pages/Employee_onboarding/AddEmployee/NavbarForm.scss';
import { HiUserPlus } from 'react-icons/hi2';
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp } from 'react-icons/io';
import { TfiClose } from 'react-icons/tfi';
import './AddNewShift.scss';
import { useNavigate } from 'react-router-dom';

function AddNewShift() {
  // Store data with useState
  const [state, setState] = useState({
    shiftName: '',
    startTime: '',
    endTime: '',
    noOfEmploy: '',
    shiftDays: '',
    duration: '',
    jobStatus: '',
    dropdowns: {
      jobStatus: false,
    },
  });

  const navigate = useNavigate();
  const dropdownRef = useRef(null);// R ef for detecting outside clicks

  // Handle input change
  const handleChange = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  // Toggle dropdown visibility
  const handleDropdownToggle = (dropdown) => {
    setState((prevState) => ({
      ...prevState,
      dropdowns: {
        ...prevState.dropdowns,
        [dropdown]: !prevState.dropdowns[dropdown],
      },
    }));
  };

  // Select dropdown item
  const handleDropdownSelect = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
      dropdowns: {
        ...prevState.dropdowns,
        jobStatus: false, // Close dropdown after selection
      },
    }));
  };

  // Handle form submit
  const handleSubmit = () => {
    console.log(state); // Handle form submission (e.g., API call)
  };

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setState((prevState) => ({
          ...prevState,
          dropdowns: { ...prevState.dropdowns, jobStatus: false },
        }));
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleClickCloseNav = () => {
    navigate('/shift-management');
  };

  return (
    <div>
      <div className="EmpOn_main_container">
        <div className="EmpOn_header">
          <div className="top-bar">
            <h2>
              <div className="span">
                <HiUserPlus />
              </div>
              Add New Shift <p>98 total</p>
            </h2>
            <span className="close_nav" onClick={handleClickCloseNav}>
              <TfiClose />
            </span>
          </div>
        </div>
      </div>

      <div id="form">
        <div className="first-section">
          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span style={{ color: '#E51F1F' }}>Shift name*</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: '5px' }}
                placeholder="Enter Shift Name"
                value={state.shiftName}
                onChange={(e) => handleChange('shiftName', e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Start Time</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: '5px' }}
                placeholder="Choose Start Time"
                value={state.startTime}
                onChange={(e) => handleChange('startTime', e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>End Time</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: '5px' }}
                placeholder="Choose End Time"
                value={state.endTime}
                onChange={(e) => handleChange('endTime', e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="second-section">
          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Number Of Employees</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: '5px' }}
                placeholder="Enter number of employees"
                value={state.noOfEmploy}
                onChange={(e) => handleChange('noOfEmploy', e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Shift Days</span>
              <input
                className="AddShiftInput"
                type="time"
                style={{ marginTop: '5px' }}
                placeholder="Enter number of shift days"
                value={state.shiftDays}
                onChange={(e) => handleChange('shiftDays', e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Duration (Hours)</span>
              <input
                className="AddShiftInput"
                type="time"
                style={{ marginTop: '5px' }}
                placeholder="Enter number of hours"
                value={state.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
              />
            </div>
          </div>
        </div>


        <div className="AddNewInputBlock" style={{ marginTop: '15px' }}>
          <label>Created By</label>
          <div ref={dropdownRef} className="AddNewShiftDropDown" style={{ marginTop: '10px'}}>
            <div
              className="AddnewShiftdropdown-button"
              style={{ padding: '5px'}}
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

      <div className="newShiftBottom" style={{ width: '100%' }}>
        <div className="Submitbtns">
          <button onClick={handleSubmit} className="Sbtn">
            Submit <IoIosArrowDropright />
          </button>
          <div id="crossBtn" style={{ border: '1px solid #B3B3B3' }}>
            <TfiClose style={{ marginLeft: '3px', marginTop: '3px' }} />
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

export default AddNewShift;

