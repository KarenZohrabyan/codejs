import React, {useEffect} from 'react';




function NavBar() {
useEffect(() => {window.onscroll = function() {myFunction()};

const navbar = document.getElementsByClassName("nav-bar")[0]
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    document.getElementsByClassName("main")[0].style.marginLeft = "340px"
  } else {
    navbar.classList.remove("sticky");
    document.getElementsByClassName("main")[0].style.marginLeft = "0px"
  }
}}, [])

    return (
        <div className="nav-bar">
            <h3 className="navSupport">In the support guide</h3>

            <ul style={{listStyleType:"none"}} className="nav-bar-ul" > <p className="meetingRoom"> <a href="#supportGuideId" className="mainNav">Set up your Microsoft 365 meeting rooms</a></p>
                <li style={{fontWeight: "bold", color: "#5c6060"}}> <a href="#addMeeting">Add meeting rooms in Microsoft 365</a>  </li>
                <li> <a href="#connectToMicrosoft" >Connect to Microsoft 365</a></li>
                <li> <a href="#manageSecSett" >Manage security settings</a></li>
            </ul>

            <ul style={{listStyleType:"none"}} className="nav-bar-ul"> <p className="meetingRoom"> <a href="#setupOffice" className="mainNav">Setup your office</a>  </p>
                <li> <a href="#meetOfficees">Meet offices</a></li>
                <li> <a href="#campuses">Campuses</a></li>
                <li> <a href="#buildings">Buildings</a></li>
                <li> <a href="#rooms">Rooms</a></li>
                <li> <a href="#roomGroups">Room groups</a></li>
            </ul>

            <ul style={{listStyleType:"none"}} className="nav-bar-ul"> <p className="meetingRoom"> <a href="#setUpMeetingRooms" className="mainNav">Digital signage & customizing signage settings</a> </p>
                <li> <a href="#digitalSignage">Digital signage</a></li>
                <li> <a href="#messagingSlides">Messaging slides</a></li>
                <li> <a href="#signageGropus">Signage groups</a></li>
                <li> <a href="#signageSetting">Signage settings</a></li>
            </ul>

            <ul style={{listStyleType:"none"}} className="nav-bar-ul">  <p className="meetingRoom"> <a href="#devLis" className="mainNav">Devices & licensing</a>  </p>
                <li> <a href="#manageSub">Manage subscription licenses</a></li>
                <li> <a href="#devices">Devices</a></li>
            </ul>

            <ul style={{listStyleType:"none"}} className="nav-bar-ul"> <p className="meetingRoom"> <a href="#meetAppSch" className="mainNav">Meet app scheduling</a> </p>
                <li> <a href="#schMeetings">Scheduling Meetings</a></li>
                <li> <a href="#viewEndMeetings">View & End Meetings</a></li>
            </ul>

            <ul style={{listStyleType:"none"}} className="nav-bar-ul"> <p className="meetingRoom"> <a href="#contactInfo" className="mainNav">Contact information</a> </p>
                <li> <a href="#supportF">Support</a></li>
                <li> <a href="#salesInq">Sales Inquiries</a></li>
            </ul>
        </div>
    )
}

export default NavBar

