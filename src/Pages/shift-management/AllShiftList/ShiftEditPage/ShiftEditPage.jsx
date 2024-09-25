import React, { useRef, useState } from 'react'
import './ShiftEditPage.scss'
import { HiUserPlus } from 'react-icons/hi2'
import { TfiClose } from 'react-icons/tfi'
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
function ShiftEditPage() {

    const [FormData,setFormData]=useState({
          shiftname:'',
          startTime:'',
          endTime:'',
          numberOfEmployees:'',
          shiftDays:'',
          Duration:''

    })

    const navigate=useNavigate()

    const CloseClick=()=>{
       navigate("/shiftManagementDetails")
    }

    const HandleChange=(e)=>{
     const {name,value}=e.target;
     setFormData((prev)=>({
        ...prev,
        [name]:value,
     }))
    }

    const HandleSubmit=()=>{
        console.log("form",FormData)
    }

    //dropdown

    const departmentOptions = [
        { label: 'CEO', value: 'CEO' },
        { label: 'HR', value: 'HR' },
        { label: 'Manager', value: 'Manager' },
      ];

    const [formData, setformData] = useState({
        department: '',
      });
    
      const [isOpen, setIsOpen] = useState(false);
      const departmentButtonRef = useRef(null);
      const dropdownRef = useRef(null);
    
      const toggleDropdown = () => setIsOpen(!isOpen);
    
      const handleItemClick = (value) => {
        setFormData({ ...formData, department: value });
        setIsOpen(false);
      };
  return (
    <div>
       <div className="EmpOn_main_container">
                <div className="EmpOn_header">
                    <div className="top-bar">
                        <h2>
                            <div className='span'><HiUserPlus/></div>
                            Edit General Shift
                        </h2>
                        <span className="close_nav" onClick={CloseClick}><TfiClose /></span>
                    </div>
                </div>
            </div>

            <div id='ShiftEditForm'>
                <div className='shiftEditSection'>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName' style={{color:"red"}}>Shift name*</span> <br />
                        <input type="text" placeholder='Enter Shift Name' name="shiftname" className='search22 AllShiftListInput' onChange={HandleChange} value={FormData.shiftname} style={{marginTop:"5px"}} />
                    </div>
                    <div className='shiftEditBlock'>
                    <span className='shiftEditName'>Start Time</span> <br />
                    <input type="time" className='search22 AllShiftListInput' style={{marginTop:"5px"}} onChange={HandleChange} value={FormData.startTime} name='startTime' />
                    </div>
                    <div className='shiftEditBlock'>
                    <span className='shiftEditName'>End Time</span> <br />
                    <input type="time"  className='search22 AllShiftListInput' style={{marginTop:"5px"}} onChange={HandleChange} value={FormData.endTime} name='endTime' />
                    </div>
                </div>

                <div className='shiftEditSection'>
                    <div className='shiftEditBlock'>
                        <span className='shiftEditName'>Number Of Employees</span> <br />
                        <input type="text" placeholder='Enter Shift Name' className='search22 AllShiftListInput' style={{marginTop:"5px"}} onChange={HandleChange} value={FormData.numberOfEmployees} name='numberOfEmployees' />
                    </div>
                    <div className='shiftEditBlock'>
                    <span className='shiftEditName'>Shift Days</span> <br />
                    <input type="text" placeholder='Enter number of Shift Days' className='search22 AllShiftListInput' style={{marginTop:"5px"}} onChange={HandleChange} value={FormData.shiftDays} name='shiftDays' />
                    </div>
                    <div className='shiftEditBlock'>
                    <span className='shiftEditName'>Duration (Hours)</span> <br />
                    <input type="text" placeholder='Enter Number of Hours' className='search22 AllShiftListInput' style={{marginTop:"5px"}} onChange={HandleChange} value={FormData.Duration} name='Duration'/>
                    </div>
                </div>
            </div>
            <div className='Bottom'>
                <div className='Submitbtns'>
                  <button className='Sbtn' onClick={HandleSubmit}>Submit <IoIosArrowDropright /></button>
                  <div id='crossBtn' style={{border:"1px solid #B3B3B3"}}><TfiClose style={{marginLeft:"3px",marginTop:"3px"}} /></div>
                </div>
               
            </div>
    </div>
  )
}

export default ShiftEditPage
