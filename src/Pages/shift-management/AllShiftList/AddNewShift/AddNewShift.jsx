import React, { useEffect, useReducer, useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { CiCircleChevRight, CiMenuKebab } from 'react-icons/ci'
import '../../../Employee_onboarding/AddEmployee/AddEmloyee.scss'
import '../../../../Pages/Employee_onboarding/AddEmployee/NavbarForm.scss'
import { HiUserPlus } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp } from 'react-icons/io'
import { TfiClose } from 'react-icons/tfi'
import './AddNewShift.scss'
import { useNavigate } from 'react-router-dom'

function AddNewShift() {

    //storeData with usestate

    const [state, setState] = useState({
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
      });
    
      const handleChange = (key, value) => {
        setState(prevState => ({
          ...prevState,
          [key]: value
        }));
      };
    
      const handleDropdownToggle = (dropdown) => {
        setState(prevState => ({
          ...prevState,
          dropdowns: {
            ...prevState.dropdowns,
            [dropdown]: !prevState.dropdowns[dropdown]
          }
        }));
      };
    
      const handleDropdownSelect = (key, value) => {
        setState(prevState => ({
          ...prevState,
          [key]: value,
          dropdowns: {
            ...prevState.dropdowns,
            jobStatus: false
          }
        }));
      };
    
      const handleSubmit = () => {
        console.log(state); // You can handle form submission here (e.g., API call)
      };
    
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref for detecting outside clicks

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
      jobStatus: false,
    },
  };

  // Reducer function to handle state updates
//   const reducer = (state, action) => {
//     switch (action.type) {
//       // Form field updates
//       case 'shiftName':
//         return { ...state, shiftName: action.payload };
//       case 'startTime':
//         return { ...state, startTime: action.payload };
//       case 'endTime':
//         return { ...state, endTime: action.payload };
//       case 'noOfEmploy':
//         return { ...state, noOfEmploy: action.payload };
//       case 'shiftDays':
//         return { ...state, shiftDays: action.payload };
//       case 'duration':
//         return { ...state, duration: action.payload };

//       // Dropdown toggle and selection
//       case 'toggleDropdown':
//         return {
//           ...state,
//           dropdowns: {
//             ...state.dropdowns,
//             [action.dropdown]: !state.dropdowns[action.dropdown],
//           },
//         };
//       case 'selectJobStatus':
//         return {
//           ...state,
//           jobStatus: action.payload,
//           dropdowns: { ...state.dropdowns, jobStatus: false }, // Close dropdown after selection
//         };
//       case 'closeDropdown':
//         return {
//           ...state,
//           dropdowns: { ...state.dropdowns, jobStatus: false }, // Close dropdown if clicked outside
//         };
//       default:
//         return state;
//     }
//   };

  // useReducer to manage form state
  



  const handleClickCloseNav = () => {
    navigate("/shift-management");
  };

  // useEffect hook to handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <div className="EmpOn_main_container">
        <div className="EmpOn_header">
          <div className="top-bar">
            <h2>
              <div className="span"><HiUserPlus /></div>
              Add New Shift <p>98 total</p>
            </h2>
            <span className="close_nav" onClick={handleClickCloseNav}><TfiClose /></span>
          </div>
        </div>
      </div>

      <div id="form">
        <div className="first-section">
          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span style={{ color: "#E51F1F" }}>Shift name*</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: "5px" }}
                placeholder="Enter Shift Name"
                value={state.shiftName}
                onChange={(e) => handleChange("shiftName", e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Start Time</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: "5px" }}
                placeholder="Choose Start Time"
                value={state.startTime}
                onChange={(e) => handleChange("startTime", e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>End Time</span>
              <input
                className="AddShiftInput"
                type="text"
                style={{ marginTop: "5px" }}
                placeholder="Choose End Time"
                value={state.endTime}
                onChange={(e) => handleChange("endTime", e.target.value)}
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
                style={{ marginTop: "5px" }}
                placeholder="Enter number of employees"
                value={state.noOfEmploy}
                onChange={(e) => handleChange("noOfEmploy", e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Shift Days</span>
              <input
                className="AddShiftInput"
                type="time"
                style={{ marginTop: "5px" }}
                placeholder="Enter number of shift days"
                value={state.shiftDays}
                onChange={(e) => handleChange("shiftDays", e.target.value)}
              />
            </div>
          </div>

          <div className="AddNewInputBlock">
            <div className="AddNewShiftInputName">
              <span>Duration (Hours)</span>
              <input
                className="AddShiftInput"
                type="time"
                style={{ marginTop: "5px" }}
                placeholder="Enter number of hours"
                value={state.duration}
                onChange={(e) => handleChange("duration", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="AddNewInputBlock" style={{ marginTop: "15px" }}>
          <label>Created By</label>
          <div ref={dropdownRef} className="AddNewShiftDropDown" style={{ marginTop: "10px" }}>
            <div
              className="AddnewShiftdropdown-button"
              style={{ padding: "5px" }}
              onClick={() => handleDropdownToggle('jobStatus')}
            >
              <div>{state.jobStatus || "Select Job Status"}</div>
              <span id="toggle_selectIcon">
                {!state.dropdowns.jobStatus ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </span>
            </div>

            {state.dropdowns.jobStatus && (
              <div className="AddNewShiftdropdown-menu">
                <div className="dropdown-item" onClick={() => handleDropdownSelect('jobStatus', 'CEO')}>CEO</div>
                <div className="dropdown-item" onClick={() => handleDropdownSelect('jobStatus', 'HR')}>HR</div>
                <div className="dropdown-item" onClick={() => handleDropdownSelect('jobStatus', 'Manager')}>Manager</div>
              </div>
            )}

          
          </div>
        </div>
      </div>
      <div className='newShiftBottom' style={{width:"100%"}}>
                <div className='Submitbtns'>
                  <button onClick={handleSubmit} className='Sbtn'>Submit <IoIosArrowDropright /></button>
                  <div id='crossBtn' style={{border:"1px solid #B3B3B3"}}><TfiClose style={{marginLeft:"3px",marginTop:"3px"}} /></div>
                </div>
               
            </div>
    </div>
  )
}

export default AddNewShift;
