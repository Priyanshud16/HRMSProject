import React from 'react'
import './ShiftManagementDetails.scss'
import { BiEditAlt, BiRevision, BiTrash } from 'react-icons/bi'
import { TfiClose } from 'react-icons/tfi'
import { Link, useNavigate } from 'react-router-dom'
function ShiftManagementDetails() {

  const navigate=useNavigate()


  const HandleClose=()=>{
  navigate("/shift-management")
  }
  return (
    <div id='ShiftManagementDetailsContainer'>
      <div id='ShiftManagementnavcontainer'>
      <div id='ShiftManagementHeading'>
        <p>Shift Management Detail</p>
      </div>
      <div id='ShiftMnagmentClose' onClick={HandleClose}>
      <span className="smclose_nav"><TfiClose /></span>
      </div>
      </div>
     <hr className='HorizontalShitManagment' />
     <div id='GenralShiftParentContainer' >
     <div id='ShiftManagementCustomerDetails' >
        <div id='SmCustomerImage'>
          <span>GS</span>
        </div>
        <div>
        <div id='ShiftManagementCustomerHeading'>
        <span>General Shift</span>
        </div>
        <div id='ShiftManagementCustomerHeadingTime'>
        <span>09.00AM-06.00PM</span>
        </div >
        </div>
     </div>

    <div id='ShiftManagmentbtnscontainer' >
          <div className="refresh divRight">
                  <div className='Smdiv_box'>
                      <span><BiRevision /></span>
                 </div>
            </div>

      <div className='SMEditBtn'>
          <div className="Right_Time">
            <div className="SMCheck_in_time">
            <Link to="/shiftEditPage" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
      <BiEditAlt style={{ textDecoration: "none", marginRight: "5px" }} />
      <h3 style={{ margin: 0 }}>Edit</h3>
    </Link>
            </div>

          </div>
      </div>

      <div className='SMEdELETEbTN'>
         <div className="Right_Time">
            <div className="SMCheck_in_time">
            <BiTrash/>
              <h3> Delete</h3>
            </div>

          </div>
      </div>
     </div>
   </div>
   <hr className='HorizontalShitManagment' />

   <div id='smInfo-Managebox'>
     <div className="smInfoManagebox">
       <div className='smInfoManageNavbar'>
        <div id='smHeadingContainer' style={{display:"flex"}}>
          <div>
            <img src="src/assets/calendar-setting-01-stroke-rounded.svg" alt="" />
          </div>
            <div id='smHeadingText'>
               <span>Shift Information</span>
            </div>
        </div>

       </div>

       <div className='smInfoDetails'>
         <div className='smInfosec'>
          <div className='block1'><span>Shift ID</span></div>
          <div className='Block2'><span>SF-00124</span></div>
         </div>
         <div className='smInfosec' style={{width:"111px"}}>
         <div className='block1'><span>Shift Name</span></div>
         <div className='Block2'><span>Morning Shift A</span></div>
         </div>
         <div className='smInfosec'>
         <div className='block1'><span>Shift Type</span></div>
         <div className='Block2'><span>Regular</span></div>
         </div>
       </div>

       <div className='smInfoDetails'>
         <div className='smInfosec'>
          <div className='block1'><span>Start Time</span></div>
          <div className='Block2'><span>09.00AM</span></div>
         </div>
         <div className='smInfosec' style={{width:"111px"}}>
         <div className='block1'><span>End Time</span></div>
         <div className='Block2'><span>06.00PM</span></div>
         </div>
         <div className='smInfosec'>
         <div className='block1'><span>Duration</span></div>
         <div className='Block2'><span>08Hrs</span></div>
         </div>
       </div>

       <div className='smInfoDetails'>
         <div className='smInfosec' style={{width:"110px"}}>
          <div className='block1' style={{width:"110px"}}><span>Days of the Week</span></div>
          <div className='Block2'><span>06 Days</span></div>
         </div>
         <div className='smInfosec' style={{width:"111px",marginRight:"35px"}}>
         <div className='block1'><span>Creation Date</span></div>
         <div className='Block2'><span>01-Jan-2024</span></div>
         </div>
         <div className='smInfosec'>
         <div className='block1'><span>Created By</span></div>
         <div className='Block2'><span>Mr.Admin</span></div>
         </div>
       </div>

       <div id='smDescription'>
         <div id='smDescriptionHeading'><span>Description</span></div>
         <div id='smDecriptionPara'>
          <span>Lorem ipsum dolor sit amet consectetur. Neque dui ipsumsectetur. Neque dui ipsum</span>
         </div>
       </div>
     </div>
      <div className='SMUserBox' style={{border:"1px solid #F1F1F1"}}>
          <div id='UserSMNav'>
            <div id='headContainer' style={{display:"flex"}}>
            <div>
            <img src="src/assets/calendar-setting-01-stroke-rounded.svg" alt="" />
            </div>
              <div id='HeadUserText'><span>Shift Management</span></div>
            </div>
          </div>

          <div id='SMUserInfoBoxes' style={{display:"flex"}}>
             <div className='smUserimgName'>
              <div className='smImgBlock'>
                <img className='smImgsec' src="src/assets/emp1.png" alt="" />
              </div>
              <div className='smDetailBlock'>
                <div className='smNameBlock'>
                  <span>Akash Shinde</span>
                </div>

                <div className='smPostBlock'>
                   <span>Shift Manager</span>
                </div>
              </div>
             </div>

             <div className='SmUserStatus'><div style={{display:"flex"}}><span className='Activebtn'></span> <h4>Active</h4></div></div>
          </div>

          <div id='SMUserInfoBoxes' style={{display:"flex"}}>
             <div className='smUserimgName'>
              <div className='smImgBlock'>
                <img className='smImgsec' style={{borderRadius:"50%"}} src="src/assets/imgUser2.jpeg" alt="" />
              </div>
              <div className='smDetailBlock'>
                <div className='smNameBlock'>
                  <span>Rajat Munde</span>
                </div>

                <div className='smPostBlock' style={{width:"100%"}}>
                   <span>Shift Manager</span>
                </div>
              </div>
             </div>

             <div className='SmUserStatus'><div style={{display:"flex"}}> <span className='Activebtn'></span><h4>Active</h4></div></div>
          </div>
       </div>
   </div>

     <div id='smEmployeAssign' style={{border:"1px solid #EFEEF0"}}>
        <div id='smEmployeNav'>
          <div id='smEmployeHead' style={{display:"flex"}}>
          <div>
            <img src="src/assets/calendar-setting-01-stroke-rounded.svg" alt="" />
          </div>
            <div id='smEmployetext'><span>Employees Assigned</span></div>
          </div>
        </div>

        <table className='table'>
                            <thead className='thead'>
                                <tr className='tr'>
                                    <th className='th'>Employee Name</th>
                                    <th className='th'>Position</th>
                                    <th  className='th'>Contact</th>
                                    <th>Department</th>
                                    <th className='th'>ACTION</th>
                                </tr>
                            </thead>
                            <tbody className='tbody'>
                                <tr className='tr'>
                                    <td className='td'>Mohd Hadi</td>
                                    <td className='td'>President of Sales</td>
                                    <td className='td'>990 470 3101</td>
                                    <td className='td'>HSEQ</td>
                                    <td className='td'><div className='actiondata' style={{border:"1px solid #D8D8D8",textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f22727" fill="none">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div></td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Amardeep Singh</td>
                                    <td className='td'>Nursing Assistant</td>
                                    <td className='td'>990 470 3101</td>
                                    <td className='td'>IT</td>
                                    <td className='td'>
                                    <div className='actiondata' style={{border:"1px solid #D8D8D8",textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f22727" fill="none">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
                                    </td>
                                </tr>
                                <tr className='tr'>
                                    <td className='td'>Vishwas Patel</td>
                                    <td className='td'>Dog Trainer</td>
                                    <td className='td'>990 470 3101</td>
                                    <td className='td'>Human Resources</td>
                                    <td className='td'>
                                    <div className='actiondata' style={{border:"1px solid #D8D8D8",textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f22727" fill="none">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
                                    </td>
                                </tr>

                                <tr className='tr'>
                                    <td className='td'>Kailash Chaurasia</td>
                                    <td className='td'>Medical Assistant</td>
                                    <td className='td'>990 470 3101</td>
                                    <td className='td'>Operations</td>
                                    <td className='td'>
                                    <div className='actiondata' style={{border:"1px solid #D8D8D8",textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f22727" fill="none">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
                                    </td>
                                </tr>

                                <tr className='tr'>
                                    <td className='td'>Paartho Ghosh</td>
                                    <td className='td'>Web Designer</td>
                                    <td className='td'>990 470 3101</td>
                                    <td className='td'>Maintenance</td>
                                    <td className='td'>
                                    <div className='actiondata' style={{border:"1px solid #D8D8D8",textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f22727" fill="none">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
                                    </td>
                                </tr>

                                <tr className='tr'>
                                    <td className='td'>Nandan Raikwar</td>
                                    <td className='td'>Marketing Coordinator</td>
                                    <td className='td'>990 470 3101</td>
                                    <td className='td'>Engineering</td>
                                    <td className='td'>
                                    <div className='actiondata' style={{border:"1px solid #D8D8D8",textAlign:"center"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#f22727" fill="none">
    <path d="M20 12L4 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

        {/* <div className='smEmployDataHead' style={{border:"1px solid #F3F2F6"}}>
          <span>EMPLOYEE NAME</span>
          <span>Position</span>
          <span>CONTACT</span>
          <span>DEPARTMENT</span>
          <span>ACTION</span>
        </div>

        <div className='smEmployDataHead' style={{border:"1px solid #F3F2F6",marginTop:"0px"}}>
          <span className='smEmployData'>Mohd Hadi</span>
         <div className='smProtector' style={{marginLeft:"50px"}}> <span className='smEmployData' >President of Sales</span></div>
          <span className='smEmployData' style={{marginRight:"95px"}}>990 470 3101</span>
          <span className='smEmployData'>HSEQ</span>
          <span className='smEmployData'>ACTION</span>
        </div> */}
       
     </div>
  </div>
  )
}

export default ShiftManagementDetails
