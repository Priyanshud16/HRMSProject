import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { HiUserPlus } from 'react-icons/hi2'
import { IoIosArrowDown, IoIosArrowDropright, IoIosArrowUp, IoIosCloseCircleOutline, IoMdAdd } from 'react-icons/io'
import { OutsideClick } from '../../../components/OutSideClick'
import './AllshiftList.scss'
import { PiCheckSquare } from 'react-icons/pi'
import { MdOutlineKeyboardArrowDown, MdWork } from 'react-icons/md'
import { FaList, FaRegClock } from 'react-icons/fa6'
import { BiRevision } from 'react-icons/bi'
import { IoFilterSharp, IoSearchSharp } from 'react-icons/io5'
import { TiArrowUnsorted } from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { OutsideClick2 } from '../../Department/DepartmentList/OutsideClick2'
function AllshiftList() {
    // const [togglNewAdd, setTogglNewAdd] = useState(false)
    const [employees, setEmployees] = useState([
        { shiftName: "General", StartTime: "09.00AM", EndTime: "06.00AM", Employees: "120", ShiftDays: "6", Duration: "8HR", status: "Active", isChecked: false },
        { shiftName: "Second", StartTime: "06.00AM", EndTime: "09.00AM", Employees: "112", ShiftDays: "6", Duration: "8HR", status: "Active", isChecked: false },
        { shiftName: "Night", StartTime: "10.00AM", EndTime: "02.00AM", Employees: "253", ShiftDays: "6", Duration: "8HR", status: "Active", isChecked: false },
       
    ]);

    //popup formdata

    const [popupformData, popupsetFormData] = useState({
        department: '',
        employName: '',
        date: '',
        shift: '',
        startTime: '',
        endTime: '',
        breakTime: '',
        extraHours: ''
      });

      const [isOpen, setIsOpen] = useState(false);
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [shiftIsOpen, setShiftIsOpen] = useState(false);
  const [searchQueryDepartment, setSearchQueryDepartment] = useState('');

  const dropdownButtonRef = useRef(null);
  const departmentButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const departmentRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleDepartment = () => setIsDepartmentOpen(!isDepartmentOpen);
  const toggleDropdownShift = () => setShiftIsOpen(!shiftIsOpen);




  const handleItemClick = (value) => {
    setFormData({ ...formData, department: value });
    setIsOpen(false);
  };

  const handleSearchQueryChangeDepartment = (e) => {
    setSearchQueryDepartment(e.target.value);
  };

  const selectOption = (field, value) => {
    setFormData({ ...formData, employName: value });
    setIsDepartmentOpen(false);
  };

  const handleShiftClick = (value) => {
    setFormData({ ...formData, shift: value });
    setShiftIsOpen(false);
  };

  const handleSubmit = () => {
    // You can process the form data here, for example, send it to an API
    console.log('Form Data:', formData);
  };

  
    
  

    // const [formData, setFormData] = useState({
    //     employeeId: '',
    //     firstName: '',
    //     lastName: '',
    //     photo: '',
    //     dob: '',
    //     age: '',
    //     gender: '',
    //     email: '',
    //     contactNumber: '',
    //     reportingManager: '',
    //     department: '',
    //     designation: '',
    //     doj: '',
    //     maritalStatus: '',
    //     doe: '',
    //     employmentType: '',
    //     employeeStatus: '',
    //     sourceOfHire: ''
    // });
    const [dropdowns, setDropdowns] = useState({
        gender: false,
        reportingManager: false,
        department: false,
        designation: false,
        maritalStatus: false,
        employmentType: false,
        employeeStatus: false,
        sourceOfHire: false
    });
    const { isOpen: isGenderOpen, ref: genderRef, buttonRef: genderButtonRef, handleToggle: toggleGender, setIsOpen: setGenderOpen } = OutsideClick();
    // const { isOpen: isDepartmentOpen, ref: departmentRef, buttonRef: departmentButtonRef, handleToggle: toggleDepartment, setIsOpen: setDepartmentOpen } = OutsideClick();

    // const selectOption = (dropdown, value) => {
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [dropdown]: value
    //     }));
    //     setDropdowns(prevState => ({
    //         ...prevState,
    //         [dropdown]: false
    //     }));
    //     // setGenderOpen(false); // Option select hone ke baad dropdown close hoga
    //     // setReportingManagerOpen(false)
    //     // setDepartmentOpen(false)
    //     // setDesignationOpen(false)
    //     // setMaritalStatusOpen(false)
    //     // setEmployeeStatusOpen(false)
    //     // setSourceOfHireOpen(false)
    //     // setEmploymentTypeOpen(false)
    // };
    //popup
 
   
    
    const shiftDropdownRef = useRef(null);
    const shiftButtonRef = useRef(null);



    
    
  
    // Close the dropdown if clicked outside of it
//    useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (departmentRef.current && !departmentRef.current.contains(event.target) && departmentButtonRef.current && !departmentButtonRef.current.contains(event.target)) {
//       setDepartmentOpen(false); // Close department dropdown when clicking outside
//     }
//     if (genderRef.current && !genderRef.current.contains(event.target) && genderButtonRef.current && !genderButtonRef.current.contains(event.target)) {
//       setGenderOpen(false); // Close gender dropdown when clicking outside
//     }
//   };

//   document.addEventListener('mousedown', handleClickOutside);
//   return () => {
//     document.removeEventListener('mousedown', handleClickOutside);
//   };
// }, []);

    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [selectedStatus, setSelectedStatus] = useState('All');
    

    
    // const { isOpen: isDepartmentOpen, ref: departmentRef, buttonRef: departmentButtonRef, handleToggle: toggleDepartment, setIsOpen: setDepartmentOpen } = OutsideClick2();
    // const { isOpen: isDepartmentOpen2, ref: departmentRef2, buttonRef: departmentButtonRef2, handleToggle: toggleDepartment2, setIsOpen: setDepartmentOpen2 } = OutsideClick2();

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [showPopup, setShowPopup] = useState(false);
    const indexOfLastEmployee = currentPage * rowsPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage;
    const [filteredEmployees, setFilteredEmployees] = useState(employees);
    const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const [fileName, setFileName] = useState('');
    const { isOpen: isFilterOpen, ref: filterRef, buttonRef: filterButtonRef, handleToggle: toggleFilter } = OutsideClick();
    const { isOpen: isFilterOpen3, ref: filterRef3, buttonRef: filterButtonRef3, handleToggle: toggleFilter3 } = OutsideClick();
    const { isOpen: isFilterOpen2, ref: filterRef2, buttonRef: filterButtonRef2, handleToggle: toggleFilter2 } = OutsideClick();
    const [activeFilter, setActiveFilter] = useState(null);
    const [selectAll, setSelectAll] = useState(false);
   
    const initialFormDetails_2 = {
        BreakTime:'',
        StartTime:'',
        Date:'',
        departmentName_2: '',
       
    };

    // const [formDetails_2, setFormDetails_2] = useState(initialFormDetails_2);
    const statuses = ['Active', 'Inactive'];
  
    
    

    const [allDel, setAllDel] = useState(true);
    const [thisDel, setThisDel] = useState(false)
    // const [toggleLeft, setToggleLeft] = useState(false)

    const DelThis = () => {
        setThisDel(!thisDel);

    }


    const handleStatusChange = (index, newStatus) => {
        const updatedEmployees = [...filteredEmployees];
        updatedEmployees[index].status = newStatus;
        setFilteredEmployees(updatedEmployees);
        setIsOpen(null);
    };

    const handleSelectAll = () => {
        setAllDel(!allDel)
        const updatedEmployees = filteredEmployees.map(emp => ({
            ...emp,
            isChecked: !selectAll
        }));
        setFilteredEmployees(updatedEmployees);
        setSelectAll(!selectAll);
    };


   
    const [searchQuery, setSearchQuery] = useState('');
    const handleRefresh = () => {
        setFilteredEmployees(employees);
        setSearchQuery('');
        setSelectedDepartment('All');
        setSelectedStatus('All');
        setCurrentPage(1);
        setRowsPerPage(10);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    
    // index page
    const handleFilterChange = (e) => {

        setSelectedDepartment(e.target.value);
        let updatedEmployees = employees;
        console.log('updatedEmployees', updatedEmployees)
        if (searchQuery) {
            updatedEmployees = updatedEmployees.filter(emp =>
                emp.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                emp.phone.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (selectedDepartment !== 'All') {
            updatedEmployees = updatedEmployees.filter(emp => emp.department === selectedDepartment);
        }

        if (selectedStatus !== 'All') {
            updatedEmployees = updatedEmployees.filter(emp => emp.status === selectedStatus);
        }

        setFilteredEmployees(updatedEmployees);
    };

    // const handleAddDepartmentClick = () => {
    //     setShowPopup(true);
    // };
    // const closePopup = () => {
    //     setShowPopup(false);
    // };
    

   const handleAddSheduleClick=()=>{
    setShowPopup(true);
    }

    // const [searchQueryDepartment, setSearchQueryDepartment] = useState('');
    // const handleSearchQueryChangeDepartment = (e) => setSearchQueryDepartment(e.target.value);

    const [searchQueryDepartment2, setSearchQueryDepartment2] = useState('');
    const handleSearchQueryChangeDepartment2 = (e) => setSearchQueryDepartment2(e.target.value);
   
    const [selectedRole, setSelectedRole] = useState('Select Role');
   

      const [shiftSelectRole,setShiftSelectRole]=useState("select Shift")

      


      //dropdown


      const [formData, setFormData] = useState({ department: '' }); // Tracks selected department
    
     
    
      // Sample department options
      const departmentOptions = ['Management', 'Development', 'HR'];
    
      
    

   
     
      
      
    
      // Close dropdown if clicked outside
     

//popup

      const closePopup = () => {
        setShowPopup(false);
    };



    useEffect(() => {
        const handleClickOutside = (event) => {
          // Close department dropdown if clicked outside
          if (
            departmentRef.current &&
            !departmentRef.current.contains(event.target) &&
            departmentButtonRef.current &&
            !departmentButtonRef.current.contains(event.target)
          ) {
            setIsDepartmentOpen(false);
          }
    
          // Close general dropdown if clicked outside
          if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target) &&
            dropdownButtonRef.current &&
            !dropdownButtonRef.current.contains(event.target)
          ) {
            setIsOpen(false);
          }
        };
    
        // Attach the event listener for outside clicks
        document.addEventListener('mousedown', handleClickOutside);
    
        // Cleanup event listener on component unmount
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [departmentRef, departmentButtonRef, dropdownRef, dropdownButtonRef]);

      
      //checkbox

      const handleCheckboxChange = (index) => {
        const updatedEmployees = [...filteredEmployees];
        updatedEmployees[index].isChecked = !updatedEmployees[index].isChecked;
        setFilteredEmployees(updatedEmployees);
    };



    

    
  return (
    <div>
        <div className="EmpOn_main_container" >
                <div className="EmpOn_header">
                    <div className="top-bar">
                        <h2>
                            <div className='span'><HiUserPlus /></div>
                            All Shifts list <p>98 total</p>
                        </h2>
                        <div className="Emp_Head_Right" style={{gap:"10px"}}>
                        <div className="addEmp btnGroup"  style={{backgroundColor:"#A3C701"}} onClick={handleAddSheduleClick} >
                                <p><span><IoMdAdd/></span>Assign shift</p>
                            </div>
                            <div className="addEmp btnGroup" style={{backgroundColor:"#A3C701"}} >
                               <Link to="/AddNewShift" style={{color:"white",textDecoration:"none"}} ><p><span><IoMdAdd/></span> Add New Shift</p></Link> 
                            </div>
                            <div className="menu_head"  >
                                <div className="div_top"><CiMenuKebab /></div>
                                <div className={`bottom_import ${!isFilterOpen3 ? 'bottom_import_hide' : ''}`}>
                                    {fileName ? '' : <AiOutlineCloudUpload />}
                                    <input type="file" accept="image/*"  />
                                    {fileName ? fileName : 'Uploaded File'}
                                </div>
                            </div>
                        </div>

                        <div className="_div">
                            <span className="1"></span>
                            <span className="2"></span>
                            <span className="3"></span>
                            <span className="4"></span>
                            <span className="5"></span>
                            <span className="6"></span>
                            <span className="7"></span>
                            <span className="8"></span>
                            <span className="9"></span>
                            <span className="10"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="EmpOn_Second_Head">
                <div id='filter_left' onClick={toggleFilter2} ref={filterButtonRef2}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#7f7f7f" fill="none">
                        <path d="M7 21H16.9999C19.3569 21 20.5354 21 21.2677 20.2678C21.9999 19.5355 21.9999 18.357 21.9999 16C21.9999 13.643 21.9999 12.4645 21.2677 11.7322C20.5354 11 19.3569 11 16.9999 11H7C4.64302 11 3.46453 11 2.7323 11.7322C2.00007 12.4644 2.00005 13.6429 2 15.9999C1.99995 18.357 1.99993 19.5355 2.73217 20.2677C3.4644 21 4.64294 21 7 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4 11C4.00005 9.59977 4.00008 8.89966 4.27263 8.36485C4.5123 7.89455 4.89469 7.51218 5.365 7.27253C5.89981 7 6.59993 7 8.00015 7H16C17.4001 7 18.1002 7 18.635 7.27248C19.1054 7.51217 19.4878 7.89462 19.7275 8.36502C20 8.8998 20 9.59987 20 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 7C6.00004 5.5998 6.00006 4.89969 6.27259 4.3649C6.51227 3.89457 6.89467 3.51218 7.36501 3.27252C7.89981 3 8.59991 3 10.0001 3H14C15.4001 3 16.1002 3 16.635 3.27248C17.1054 3.51217 17.4878 3.89462 17.7275 4.36502C18 4.8998 18 5.59987 18 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 15L15.7 15.4C15.1111 16.1851 14.8167 16.5777 14.3944 16.7889C13.9721 17 13.4814 17 12.5 17H11.5C10.5186 17 10.0279 17 9.60557 16.7889C9.18328 16.5777 8.88885 16.1851 8.3 15.4L8 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

               

                <div className={`left ${!isFilterOpen2 ? 'filterLeftOpen' : 'filterLeftClose'}`} ref={filterRef2} >
                    <div className="all">
                        <div
                            className={`listActive ${activeFilter === 'all' ? 'listActive' : ''}`}
                            onClick={() => filter_leftClose('all')}
                        >
                            <span><FaList /></span>All
                        </div>
                    </div>
                    <div
                        className={`active ${activeFilter === 'draft' ? 'listActive' : ''}`}
                        onClick={() => filter_leftClose('draft')}
                    >
                        <div>
                            <span><PiCheckSquare /></span>Active
                        </div>
                    </div>
                    <div
                        className={`inactive ${activeFilter === 'open' ? 'listActive' : ''}`}
                        onClick={() => filter_leftClose('open')}
                    >
                        <div>
                            <span><IoIosCloseCircleOutline /></span>Inactive
                        </div>
                    </div>
                   
                    
                   
                </div>

                <div className="right">
                    <div className="refresh divRight" onClick={handleRefresh}>
                        <div className='div_box'>
                            <span><BiRevision /></span>
                        </div>
                    </div>
                    <div className="search divRight">
                        <div className='search div_box'>
                            <span className='search_icon'><IoSearchSharp /></span>
                            <input
                                type="search"
                                name="search"
                                placeholder='Search Employee name, phone number...'
                                value={searchQuery}
                                onChange={handleSearchChange}
                                onKeyUp={handleFilterChange}
                               id='AllShiftSearch'
                            />
                        </div>
                    </div>
                    
                </div>
            </div>

    
    {/* <div id='Table-Container'>
    <div className='table-child'>Shift Name</div>
    <div className='table-child'>Start Time</div>
    <div className='table-child'>End Time</div>
    <div className='table-child'>No. of Employees</div>
    <div className='table-child'>Shift Days</div>
    <div className='table-child'>Duration</div>
    <div className='table-child'>Status</div>
    </div> */}
{/* 
<table id='Table-Container' style={{width:"100%",textAlign:"left"}}>
        <tbody style={{backgroundColor:"rgb(250, 246, 255)",color:"rgb(110,82,138)"}}>
            <tr>
                <td className='table-Content' id='table-Heading' style={{paddingLeft:"10px" }}> <span> <input type="checkbox"/></span> Shift Name</td>
                <td className='table-Content'>Start Time</td>
                <td className='table-Content'>End Time</td>
                <td className='table-Content'>No. of Employees</td>
                <td className='table-Content'>Shift Days</td>
                <td className='table-Content'>Duration</td>
                <td className='table-Content'>Status</td>
            </tr>
        </tbody>
        <tbody id='table-Body' style={{width:"100%"}}>
            <tr style={{width:"100%"}}>
                <td className='table-Content' style={{ paddingLeft:"10px" }}><span> <input type="checkbox"/></span>  General</td>
                <td className='table-Content' style={{paddingLeft:"10px" }}>08:00 AM</td>
                <td className='table-Content'>04:00 PM</td>
                <td className='table-Content'>15</td>
                <td className='table-Content'>6</td>
                <td className='table-Content'>8 hours</td>
                
            </tr>
            <tr>
                <td className='table-Content' style={{paddingLeft:"10px" }}><span> <input type="checkbox"/></span>  Second</td>
                <td className='table-Content'>12:00 PM</td>
                <td className='table-Content'>08:00 PM</td>
                <td className='table-Content'>12</td>
                <td className='table-Content'>6</td>
                <td className='table-Content'>8 hours</td>
            </tr>
            <tr>
                <td className='table-Content' style={{paddingLeft:"10px" }}><span> <input type="checkbox"/></span>  Night</td>
                <td className='table-Content'>10:00 PM</td>
                <td className='table-Content'>06:00 AM</td>
                <td className='table-Content'>10</td>
                <td className='table-Content'>6</td>
                <td className='table-Content'>8 hours</td>
            </tr>
        </tbody>
    </table> */}


<div className="allEmployeeList" >
                {/* <div className="head">
                </div> */}
                <div className="employee-table">

                    <table >
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                                    {/* {!allDel &&
                                        <span id='deleteAll'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff0000" fill="none">
                                                <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                            </svg>
                                        </span>
                                    } */}
                                </th>
                                <th> <div>Shift Name<span><TiArrowUnsorted /></span></div></th>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>No. of Employees</th>
                                <th>Shift Days</th>
                                <th>Duration</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentEmployees.map((emp, index) => (
                                <tr key={index} >
                                    <td>
                                        <input type="checkbox" checked={emp.isChecked} onChange={() => handleCheckboxChange(indexOfFirstEmployee + index)} onClick={DelThis} />
                                        {/* {emp.isChecked &&
                                            <span id='deleteThis'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#ff0000" fill="none">
                                                    <path d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M9 11.7349H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M10.5 15.6543H13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M3 5.5H21M16.0555 5.5L15.3729 4.09173C14.9194 3.15626 14.6926 2.68852 14.3015 2.39681C14.2148 2.3321 14.1229 2.27454 14.0268 2.2247C13.5937 2 13.0739 2 12.0343 2C10.9686 2 10.4358 2 9.99549 2.23412C9.89791 2.28601 9.80479 2.3459 9.7171 2.41317C9.32145 2.7167 9.10044 3.20155 8.65842 4.17126L8.05273 5.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                                </svg>
                                            </span>
                                        } */}
                                    </td>
                                    
                                  <td> <Link to="/shiftManagementDetails" className='ShiftManagementLink'>{emp.shiftName}</Link></td>
                                   {/* <td>{emp.shiftName}</td> */}
                                    <td><Link to="/shiftManagementDetails" className='ShiftManagementLink'>{emp.StartTime}</Link></td>
                                    <td><Link to="/shiftManagementDetails" className='ShiftManagementLink'>{emp.EndTime}</Link></td>
                                    <td> <Link to="/shiftManagementDetails" className='ShiftManagementLink'>{emp.Employees}</Link></td>
                                    <td><Link to="/shiftManagementDetails" className='ShiftManagementLink'>{emp.ShiftDays}</Link></td>
                                    <td>        <Link to="/shiftManagementDetails" className='ShiftManagementLink'>{emp.Duration}</Link>
                                    </td>
                                    <td>
                                        <div className="status-dropdown">
                                            <div key={index} className="status-container">
                                                <div
                                                    className={`status-display ${emp.status ? emp.status.toLowerCase().replace(' ', '-') : ''}`}
                                                    onClick={() => setIsOpen(isOpen === index ? null : index)}
                                                >
                                                    <span className={`left_dot ${emp.status ? emp.status.toLowerCase().replace(' ', '-') : ''}`}></span>
                                                    <div>
                                                        <div className="">
                                                            {emp.status || 'Unknown Status'} {/* Optional: Fallback text */}
                                                        </div>
                                                        <div className="^wdown">
                                                            <MdOutlineKeyboardArrowDown />
                                                        </div>
                                                    </div>
                                                </div>

                                                {isOpen === index && (
                                                    <div className="status-options">
                                                        {statuses.map(status => (
                                                            <div
                                                                key={status}
                                                                className="status-option"
                                                                onClick={() => handleStatusChange(index, status)}
                                                            >
                                                                {status}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </td>


                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {showPopup && (
                        <div className="popup-overlay" style={{border:"1px solid brown"}} >
                             <div className='Popup'>
     <div className='PopupNav'>
      <div className='PopupHeading' style={{display:"flex",justifyContent:"space-between",width:"92%"}}>
      <span>Add Shedule</span>  
      <div className='close_icon' onClick={closePopup}>
                            <svg id='CloseBtnIcon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#9b9b9b" fill="none">
                                <path  d="M14.9994 15L9 9M9.00064 15L15 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                        </div>
        </div>

    <div id='MainContent'>
      <div className='First-Section'>
      <div className="First-SectionData">
      <label style={{ color: "#E51F1F" }}>Department*</label>
      <div className="dropdown" style={{ marginTop: '10px' }}ref={dropdownRef}>
        <div
          className="dropdown-button"
          style={{ padding: '5px', cursor: 'pointer' }}
          onClick={toggleDropdown}
          ref={departmentButtonRef}
        >
        <div>{formData.department || 'Select department'}</div>
          <span id="toggle_selectIcon">
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>

        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={() => handleItemClick('CEO')}>CEO</div>
            <div className="dropdown-item" onClick={() => handleItemClick('HR')}>HR</div>
            <div className="dropdown-item" onClick={() => handleItemClick('Manager')}>Manager</div>
          </div>
        )}
      </div>
    </div>

       <div className='First-SectionData'>
        <label style={{color:"#E51F1F"}}>Employee Name*</label>
        <div className="form-group" style={{ marginTop: '10px' }}>
                          
                            <div className="dropdown" ref={departmentRef}>
                                <div className="dropdown-button" ref={departmentButtonRef} onClick={toggleDepartment}>
                                <div>{formData.employName || "Select employee"}</div>
                                    <span id='toggle_selectIcon'> {!isDepartmentOpen ? <IoIosArrowDown /> : <IoIosArrowUp />} </span>
                                </div>
                                {isDepartmentOpen && (
                                    <div className="dropdown-menu" ref={departmentRef}>
                                        <input
                                        
                                            type="search"
                                            className='search22 AllShiftListInput'
                                            placeholder="Search department"
                                            value={searchQueryDepartment}
                                            id='searchDepartmentHead'
                                            onChange={handleSearchQueryChangeDepartment}
                                        />
                                        <div className="dropdown_I">
                                            {['Akash Singhde', 'Rajat Munde', 'Arman Singh'].filter(option =>
                                                option.toLowerCase().includes(searchQueryDepartment.toLowerCase())
                                            ).map(option => (
                                                <div className="dropdown-item" onClick={() => selectOption('employName', option)} key={option}>
                                                    {option}
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
       </div>
      </div>
      <div className='First-Section' style={{marginTop:"6px"}}>
      <div className='First-SectionData'>
        <label>Date</label>
        <input className='AllShiftListInput' type="date" style={{width:"340px"}} onChange={(e) => popupsetFormData({ ...popupformData, date: e.target.value })}
 />
      </div>
      <div className='First-SectionData'>
        <label style={{color:"red"}}>Shifts*</label>
        <div className="dropdown" style={{ marginTop: '10px' }} ref={dropdownRef}>
      <div
        className="dropdown-button"
        style={{ padding: '5px', cursor: 'pointer' }}
        onClick={toggleDropdownShift}
        ref={departmentButtonRef}
      >
        <div>{formData.shift || 'Select shift'}</div>
        <span id="toggle_selectIcon">
          {shiftIsOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </span>
      </div>

      {shiftIsOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleShiftClick('Day')}>Day</div>
          <div className="dropdown-item" onClick={() => handleShiftClick('Night')}>Night</div>
    
        </div>
      )}
    </div>
      </div>
       </div>

       <div className='First-Section' style={{marginTop:"6px"}}>
      <div className='First-SectionData'>
        <label style={{color:"#E51F1F"}}>Start Time*</label>
        <input type="time" className='AllShiftListInput'  style={{width:"340px"}}  onChange={(e) => popupsetFormData({ ...popupformData, startTime: e.target.value })} />
      </div>
      <div className="First-SectionData">
      <label style={{color:"#E51F1F"}}>End Time*</label>
        <input type="time"className='AllShiftListInput' style={{width:"340px"}} onChange={(e) => popupsetFormData({ ...popupformData, endTime: e.target.value })} />
      </div>
       </div>

       <div className='First-Section' style={{marginTop:"6px"}}>
       <div className='First-SectionData'>
        <label style={{color:"#E51F1F"}}>Break Time*</label>
        <input type="time" className='AllShiftListInput' style={{width:"340px"}}   onChange={(e) => popupsetFormData({ ...popupformData, breakTime: e.target.value })}/>
      </div>

      <div className='First-SectionData'>
        <label>Extra Hours</label>
        <input type="text"  className='AllShiftListInput'  style={{width:"340px"}} placeholder="choose your hour"   onChange={(e) => popupsetFormData({ ...popupformData, extraHours: e.target.value })}/>
      </div>
       </div>
      </div>
      <button onClick={handleSubmit} id='FormSubmitBtn' type='submit'>Submit <IoIosArrowDropright /></button>
     </div>
     
    </div>
    
                        </div>


                    )}
                    
                    
                </div>
              

     </div>
           
    </div>
  )
}

export default AllshiftList
