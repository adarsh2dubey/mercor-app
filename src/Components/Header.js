import React from 'react'
import './styles/Header.css';
import { FaSearch } from 'react-icons/fa';
import { BsCalendar } from 'react-icons/bs';
import { BsQuestionSquare } from 'react-icons/bs';
import { AiOutlineAppstore } from 'react-icons/ai';
import { AiOutlineTeam } from 'react-icons/ai';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiFillBulb } from 'react-icons/ai';
import { VscBellDot } from 'react-icons/vsc';
import { BiMessageAltDots } from 'react-icons/bi';
import { BsListTask } from 'react-icons/bs';
import { RiAddBoxLine } from 'react-icons/ri';
import logo from '../logo.svg';

const Header = () => {

  function openSidebar() {
    console.log("open")
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementsByClassName("open-btn")[0].style.display = "none";
    document.getElementsByClassName("close-btn")[0].style.display = "flex";
    if(window.innerWidth > 800)
    document.getElementsByClassName("maindiv")[0].style.marginLeft = "250px";
    
  }

  function closeSidebar() {
    console.log("close")
    document.getElementById("mySidebar").style.width = "0";
    document.getElementsByClassName("open-btn")[0].style.display = "flex";
    document.getElementsByClassName("close-btn")[0].style.display = "none";
    document.getElementsByClassName("maindiv")[0].style.marginLeft = "10px";

  }

  return (
    <>
      <div class="navbar " id="myNavbar">
        <div class="mx-lg-3 mx-sm-2 mx-md-1 px-2  " id="main">
          <div class="my-auto me-2 log">
            <div style={{ position: "relative", top: "3px", height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#5030E5", margin: "auto" }}></div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#5030E5", opacity: "0.75" }}></div>
              <div style={{ height: "10px", width: "10px", borderRadius: "50%", backgroundColor: "#5030E5", opacity: "0.75" }}></div>
            </div>
          </div>
          <h1 class="my-auto d-flex" id="title" href="#home" ><span class="mt-1"> Project M. </span>       <span href="javascript:void(0)" class="open-btn my-auto " onClick={openSidebar}> &#xBB;</span>
          </h1>
          <p style={{ fontSize: "40px" }} href="javascript:void(0)" class="close-btn" onClick={closeSidebar}> &#xab;</p>


          <div class="search" >
            <FaSearch size={20} id="search-icon" />
            <input type="text" placeholder="             Search for Anything....." />
          </div>


        </div>



        <div class="me-lg-3 me-sm-1 me-md-2 row  user-profile">

          <div class="d-flex my-auto col icons justify-content-center gap-4">


            <BsCalendar size={25} />

            <BsQuestionSquare size={25} />
            <VscBellDot size={25} />
          </div>

          <div style={{ marginTop: "1rem" }} class="col  py-auto text-center">

            <p id="user"><span style={{ fontSize: "19px" }}> Arima Agarwal </span>  <br /> <span style={{ fontSize: "17px" }}> U.P. India </span></p>


          </div>
          <div className="avatar-container my-auto me-1">
            <img src={logo} alt="Avatar" className="avatar-image" />
          </div>





        </div>

      </div>

      <div id="mySidebar" class="sidebar">

        <div class="searchInNav" >
          <FaSearch size={20} id="search-icon" />
          <input type="text" placeholder="         Search for Anything....." />

        </div>

        <div class="d-flex my-2 col py-2 iconsInNav justify-content-center gap-5">


          <BsCalendar size={25} />

          <BsQuestionSquare size={25} />
          <VscBellDot size={25} />

        </div>
        <div style={{ borderBottom: "1px solid #DBDBDB" }} class="ms-lg-3 ms-sm-1 ms-md-2">
          <p class="sidebarTitle my-4"> <AiOutlineAppstore size={25} /> Home</p>
          <p class="sidebarTitle my-4"><BiMessageAltDots size={25} /> Messages</p>
          <p class="sidebarTitle my-4"><BsListTask size={25} /> Tasks</p>
          <p class="sidebarTitle my-4"><AiOutlineTeam size={25} /> Members</p>
          <p class="sidebarTitle my-4"> <AiOutlineSetting size={25} /> Settings</p>
        </div>
        <div class="ms-lg-3 ms-sm-1 ms-md-2">
          <div className="d-flex mt-2 me-2 justify-content-between">
            <p id="myproject">MY PROJECTS</p>
            <div><RiAddBoxLine size={15} /> </div>

          </div>
          <div style={{ height: "39px", backgroundColor: "rgba(80, 48, 229, 0.08)", borderRadius: "6px" }} className="d-flex mt-2 me-2 justify-content-between">
            <div class="d-flex px-1">
              <span class="my-auto" style={{ height: "7px", width: "7px", borderRadius: "50%", backgroundColor: "#7AC555" }}></span>
              <p style={{ marginLeft: "10px", fontWeight: "600", fontSize: "16px", lineHeight: "19px", color: "#0D062D" }} class="my-auto">Mobile App</p>
            </div>
            <div class="me-2 my-auto">
              <p style={{ fontWeight: "800", fontSize: "16px", lineHeight: "19px", color: "#0D062D" }} class="my-auto">...</p>
            </div>
          </div>
          <div style={{ height: "39px" }} className="d-flex mt-2 me-2 justify-content-between">
            <div class="d-flex px-1">
              <span class="my-auto" style={{ height: "7px", width: "7px", borderRadius: "50%", backgroundColor: "#FFA500" }}></span>
              <p style={{ marginLeft: "10px", fontWeight: "400", fontSize: "16px", lineHeight: "19px", color: "#0D062D" }} class="my-auto">Website Redesign</p>
            </div>

          </div>
          <div style={{ height: "39px" }} className="d-flex mt-2 me-2 justify-content-between">
            <div class="d-flex px-1">
              <span class="my-auto" style={{ height: "7px", width: "7px", borderRadius: "50%", backgroundColor: "#E4CCFD" }}></span>
              <p style={{ marginLeft: "10px", fontWeight: "400", fontSize: "16px", lineHeight: "19px", color: "#0D062D" }} class="my-auto">Design System</p>
            </div>

          </div>
          <div style={{ height: "39px" }} className="d-flex mt-2 me-2 justify-content-between">
            <div class="d-flex px-1">
              <span class="my-auto" style={{ height: "7px", width: "7px", borderRadius: "50%", backgroundColor: "#76A5EA" }}></span>
              <p style={{ marginLeft: "10px", fontWeight: "400", fontSize: "16px", lineHeight: "19px", color: "#0D062D" }} class="my-auto">Wireframes</p>
            </div>

          </div>

        </div>
        <br />
        <br />
        <br />
        <br />
        <div class="textBoxInSideBar  mx-auto">
          <div class="mx-auto "  style={{padding:"14px",position:"relative", bottom:"30px", height:"60px",width:"60px",backgroundColor:"#C4C4C4",borderRadius:"50%"}} > 
          <AiFillBulb size={30} style={{margin:"auto",color:"#FBCB18"}} />
          </div>
          <h3 class="text-center" style={{fontFamily: 'Inter',fontStyle: "normal",fontWeight: "600",fontSize: "19px"}}>Thoughts Time</h3>
<p class="text-center p-2" style={{fontFamily: 'Inter',fontStyle: "normal",fontWeight: "400",fontSize: "14px"}}> 
We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
<input style={{margin:"0 20px",width:"160px",height:"40px",border:"none",textAlign:"center"}} type="text" placeholder='Write a message' />
        </div>
        <br />
        <br />
       
      </div>
    </>
  )
}
export default Header;