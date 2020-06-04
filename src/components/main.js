import React from 'react';
import img from '../images/img-dashboard-settings.png'
import img_2 from '../images/img-settings-integrate.png'
import img_3 from '../images/img-office-structure.png'
import img_4 from '../images/img-campus-addbtn.png'
import addABuilding from '../images/add a building.png'
import addAFloors from '../images/addAFloors.png'
import editBusiness from '../images/editBusiness.png'
import addARoom from '../images/add a room.png'
import addingMultiple from '../images/addingMultiple.png'
import addACustomRoom from '../images/addACustomRoom.png'
import messagingSlides from '../images/messagingSlides.png'
import signageGroup from '../images/signageGroup.png'
import signageSetting from '../images/signageSetting.png'
import addingASubscription from '../images/addingASubscription.png'
import pairADevice from '../images/pairADevice.png'
import managingDevices from '../images/managingDevices.png'
import assignProductLicensing from '../images/assignProductLicensing.png'
import meetNow1 from '../images/meetNow1.png'
import meetNow2 from '../images/meetNow2.png'
import reserve1 from '../images/reserve1.png'
import reserve2 from '../images/reserve2.png'
import view1 from '../images/view1.png'
import view2 from '../images/view2.png'

import pairADevice2 from '../images/pairADevice2.png'

function Main() {
    return (
        <div className="main">
            <div className="navigation" id="supportGuideId">
                <h1 className="supportGuide" >Support Guide</h1>
                <p className="LModify">Last Modified: May 22, 2020</p>
            </div>
            <div>
                <h2 className="SetUpMeetingRooms">Set up your Microsoft 365 meeting rooms</h2>
            </div>
            
            <div className="navigation" id="addMeeting">
                <h3 className="AddMeetingRooms" >Add meeting rooms in Microsoft 365</h3>
                <p className="usesInfo">Communify Meet uses your Microsoft 365 information to show meeting room 
                availability. As such, meeting rooms need to be created in Microsoft 365 first:</p>

                <ol> <strong className="strongMenu">Steps to create rooms in Microsoft 365</strong>
                    <li>Log into your Office web portal using the Administrator credentials for your 
                    company’s account. </li>
                    <li> Select “Admin” from the list of available apps. </li>
                    <li>Select the Equipment icon on the left, select “Rooms & equipment” then click 
                    the + to add a new meeting room </li>
                    <ol type="a">
                        <li style={{marginLeft: "77px"}}>
                            If you don't see the Equipment icon in the menu on the left, you may be 
                            running Microsoft 365 for Small Business, or another variation. The set-up 
                            process is slightly different. See <a href="https://www.google.ru/" className="mainNav">this guide</a> from Microsoft for more 
                            information.
                        </li>
                    </ol>

                    <li>Fill in your room details.  </li>

                    <li>Select "Set scheduling options" to confirm that the room will automatically 
                    accept meeting invitations when it's available (this is the default).  </li>
                    
                    <li>Repeat and create rooms for each of the bookable spaces in your office.  </li>
                    
                    <li>Your rooms are now ready to be added to Communify Meet. </li>
                </ol>

                <p className="toDo">To do this, Connect Meet to Microsoft 365. </p>
            </div>

            <div className="navigation" id="connectToMicrosoft">
                <h3 className="connectTo" >Connect to Microsoft 365 </h3>
                <p className="toDo">Microsoft 365 administrators can grant Communify Meet permission to access the 
                company’s calendar information through the Communify administration portal. </p>

                <strong className="strongMenu">Enterprise Application </strong>

                <p className="toDo">
                Installing Meet as an Azure Enterprise Application requires a Global Administrator 
                account in Microsoft 365 to grant Meet permission to interact with your 
                organization’s calendars. The major benefit of granting Meet access this way is that 
                it is a one-time process that requires no maintenance as new rooms are added.  
                </p>

                <strong className="strongMenu">Connect via app</strong>

                <p className="toDo"> You must be a Global Administrator to complete this step. </p>

                <ol>
                    <li>Navigate to <strong>Settings</strong> from the left-hand navigation.</li>
                    <img src={img} alt="Navigate to Settings from the left-hand navigation." className="olImages"></img>

                    <li>Select “Connect Account” under Microsoft 365 Integrations.</li>
                    <img src={img_2} alt="Connect Account” under Microsoft 365 Integrations." className="olImages"></img>

                    <li>You will be taken through a Microsoft login process – be sure to use an 
                    administrator account – culminating in a permissions screen where you will 
                    authorize Meet to have the required permissions to access your organization’s 
                    calendar and contact information. All the required permissions will be listed out 
                    for you to grant with one click.</li>
                </ol>

                <p className="toDo">After you grant the permissions, you will be returned to the Communify 
                Administration Portal to continue your setup and add your meeting rooms to Meet. </p>
            </div>


            <div className="navigation" id="manageSecSett">
                <h3 className="connectTo" >Manage security settings</h3>
                <p className="toDo">If your subscription tier allows it, domain restrictions and IP filtering rules 
                can be applied on the <strong style={{color: "#5c6060"}}>Settings</strong> page. </p>
                <strong className="strongMenu">Domain restrictions</strong>

                <p className="toDo">
                Domain restrictions on email addresses can be applied to limit where new user 
                invitations can be sent to. Select the “Add Domain” button to add a new restriction. 
                For instance, having a single domain restriction of <strong>communifyapp.com</strong> will prevent 
                invitations from being sent out to anyone whose email address does not end in 
                @communifyapp.com. Multiple allowable domains can be specified. 
                </p>

                <strong className="strongMenu">IP Filtering</strong>

                <p className="toDo">
                All IP ranges are accepted by default. Select the “Add IP Filter Rule” button to reject 
                new ranges.  </p>
                
                <p className="firstNOTE">
                    NOTE: Please use caution when applying filters that your current IP address does 
                    not fall outside of the applied ranges or you will lose access to the Communify 
                    Administration Portal. Contact <a href="https://www.google.ru/" className="mainNav">support@communifyapp.com</a> if you are 
                    unintentionally locked out of your account. 
                </p>
                
                <em className="deviationStyle">
                    If you apply an IP filter rule, be sure to apply a rule containing your current 
                    external IP first! 
                </em>
            </div>

            <div className="navigation" id="setupOffice">
                <h2 className="setupOffice" >Setup your office</h2>
            </div>


            <div className="navigation" id="meetOfficees">
                <h3 className="connectTo" style={{marginTop: "0px"}} >Meet offices</h3>

                <p className="toDo">
                    In Communify Meet, your organization’s office is made up of campuses, buildings, 
                    and rooms. Please reference the chart below to show how a company may be 
                    organized.  
                </p>
                
                <p className="firstNOTE"> 
                    Note: You must set up at least one campus and one building in order to add 
                    rooms. 
                </p>
                <img src={img_3} alt="Setup your office" ></img>
            </div>
            
            <div className="navigation" id="campuses">
                <h3 className="connectTo" >Campuses</h3>
                <p className="toDo">
                    Campuses are a collection of associated buildings. Some customers refer to 
                    campuses by a formal campus name, city, or region. Administrators can manage 
                    their organization's campuses from <strong>Offices > Campuses</strong> in the Communify 
                    Administration Portal. 
                </p>

                <strong className="strongMenu"> Add a campus</strong>
                <p className="toDo">
                    To add a Campus, select the "Add Campus" button from <strong>Offices > Campuses</strong>. Once 
                    you have named your campus and added an address, you’ll want to add a few 
                    buildings to it.  Select the campus and “Add Building”. 
                </p>

                <img src={img_4} alt="Add a campus" style={{marginBottom: 50}}></img>
            </div>

            
            <div className="navigation" id="buildings">
                <h3 className="connectTo" >Buildings</h3>
                <p className="toDo">
                    Buildings represent the physical location of rooms. For most organizations, 
                    a building will be a single office address or location. Buildings must be assigned to a campus. 
                </p>
                <p className="toDo">
                    Administrators in Meet can manage their organization's buildings   
                    from <strong>Offices > Buildings</strong> in the Communify Administration Portal.
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Add a building</strong>
                <p className="toDo">
                    You must enter at least one building to start adding rooms to Meet. In the future, 
                    you may return to <strong>Offices > Buildings</strong> and select “Add building” to add more.  
                </p>

                <img src={addABuilding} alt="addABuilding" className="addABuilding" style={{marginBottom: 50}}></img>

                <strong className="strongMenu" style={{marginBottom: 9}}> Add a floors</strong>
                <p className="toDo">
                    Floors are an optional way to create an additional organizational layer within a 
                    building and group rooms within the Administration Portal. Floors can be added to 
                    buildings by selecting to "Add Floor" button. Floors can be rearranged by selecting 
                    the “Reorder Floors” button.  
                </p>

                <p className="toDo">After a floor has been created, rooms can be assigned to a floor.</p>

                <img src={addAFloors} alt="addAFloors" className="addABuilding" style={{marginBottom: 50}}></img>


                <strong className="strongMenu" style={{marginBottom: 9}}> Edit business operating hours</strong>
                <p className="toDo">
                    Admins can edit a building’s working hours by navigating to <strong>Offices > Buildings > Building Detail Page > Edit Business Hours.</strong> 
                    Editing these hours will adjust the agenda schedule in the Meet calendar hall display accordingly.  
                </p>

                <img src={editBusiness} alt="editBusinss" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>


            <div className="navigation" id="rooms">
                <h3 className="connectTo" >Rooms</h3>
                <p className="toDo">
                    In Meet, rooms are a physical representation of the rooms in your Microsoft 365 address book. 
                    Administrators can manage their organization's rooms from <strong>Offices > Rooms</strong> in the Communify Administration Portal.
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Add a room</strong>
                <p className="toDo">
                    Administrators can add new rooms by selecting the "Add Room" button from <strong>Offices > Rooms.</strong>
                </p>
                <p className="toDo">
                    Use the form to enter the email address of the room (which you can get from the Microsoft 365 portal), add a name, 
                    and assign a location. Upon creating the room, visit the room detail page to edit room properties, features, and room groups. 
                </p>
                <p className="toDo">
                    Room properties can be edited to designate a floor, room number, capacity, and wheelchair accessibility. 
                    Select the “Save Changes” button once you are satisfied with your changes. 
                </p>
                <p className="toDo">
                    Adding a room can also be initiated by visiting a building detail page (<strong>Offices > Buildings</strong>) and selecting the “Add room” button. 
                </p>

                <img src={addARoom} alt="addARoom" className="addABuilding" style={{marginBottom: 50}}></img>

                <strong className="strongMenu" style={{marginBottom: 9}}> Add multiple rooms</strong>
                <p className="toDo">
                    Multiple rooms can be added by visiting <strong>Offices > Rooms</strong> and selecting the “Add Multiple Rooms” button. 
                </p>

                <ol> Steps to upload .csv:
                    <li>Download the linked .csv file</li>

                    <li>Upon updating and saving the .csv file, select the “Choose file” button </li>

                    <li>Press the “Add Multiple Rooms” button.</li>
                </ol>

                <p className="toDo">
                    Adding multiple rooms can also be initiated by visiting a building detail page and selecting the “Add multiple rooms” button.  
                </p>

                <img src={addingMultiple} alt="addingMultiple" className="addABuilding" style={{marginBottom: 50}}></img>

                <strong className="strongMenu" style={{marginBottom: 9}}> Room features</strong>
                <p className="toDo">
                    Admins can edit room features by visiting <strong>Offices > Rooms</strong> and pressing the “Room Settings” button. 
                    Added room features will be available to be modified on each individual room. 
                </p>
            </div>



            <div className="navigation" id="roomGroups">
                <h3 className="connectTo" >Room Groups</h3>
                <p className="toDo">
                    Rooms can be organized into room groups both manually and automatically. Organizations can use room groups to share out relevant digital 
                    signage messaging on the Meet calendar hall displays frequented by employees in specific locations, or by departments, teams, and working groups.  
                </p>

                <p className="toDo">There are two types of room groups in the Communify Administration portal: </p>
                <ol style={{listStyleType:"none"}} className="roomGroups"> 
                    <li> <strong>Custom room groups</strong> are user-generated. These room groups can include 
                        any collection of rooms across one or more buildings in a single campus.  
                    </li>
                    <li> 
                        <strong>Floor room groups</strong> are system-generated. A floor room group is automatically 
                        created for each floor of a building with more than one room assigned.  
                    </li>
                </ol>

                <strong className="strongMenu" style={{marginBottom: 9}}> Add a custom room group</strong>
                <p className="toDo">
                    Administrators can add new room groups by selecting the "Add Room Groups" button from <strong>Offices > Room Groups.  </strong>
                </p>
                <p className="toDo">
                    Use the form to add a name and assign a campus. Upon creating the room group, 
                    visit the custom room group detail page to add and edit room membership. 
                </p>

                <img src={addACustomRoom} alt="addACustomRoom" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>





            <div className="navigation" id="setUpMeetingRooms">
                <h2 className="SetUpMeetingRooms" >Digital signage & customizing signage settings</h2>
            </div>


            <div className="navigation">
                <h3 className="connectTo" id="digitalSignage">Digital signage</h3>
                <p className="toDo">
                    Alongside room status and room reservation features, Communify Meet provides a digital signage endpoint at each Meet calendar 
                    hall display. Organizations can share global and targeted messaging to show employees relevant content where they’re most likely to see it. 
                </p>
                <p className="toDo">
                    Administrators add slides to signage groups that can be shared to across the entire organization or to one or more campus, building, room group, or room. 
                </p>
            </div>

            <div className="navigation" id="messagingSlides">
                <h3 className="connectTo" >Messaging slides</h3>
                <p className="toDo">
                    Messaging slides are individual visual messages created in the Communify Administration 
                    Portal and delivered on Meet calendar hall displays through Signage Groups. 
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Adding a messaging slide </strong>
                <p className="toDo">
                    Add a message slide by selecting the “Add Slide” button from <strong>Digital Signage > Slides</strong>. Messaging slides allow for a custom slide name, 
                    slide background image, title, and message. Slides can be added, removed, and edited directly.
                </p>


                <ol style={{listStyleType:"none"}} className="roomGroups"> 
                    <li> Recommended Background image size: 1200px by 976px   
                    </li>
                    <li> 
                        Remember to <strong>publish changes</strong> after modifying a slide. Changes will not be visible on the meeting room displays until a slide is published.   
                    </li>
                </ol>
                <img src={messagingSlides} alt="messagingSlides" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>


            <div className="navigation" id="signageGropus">
                <h3 className="connectTo" >Signage Gropus</h3>
                <p className="toDo">
                    A signage group is a collection of messaging slides. Signage groups can be applied to the entire tenant, or to one or more campus, building, room group, or room. 
                    Once assigned to a location, the associated Meet calendar hall display will cycle through the slides in the signage group.  
                </p>

                <ol style={{listStyleType:"none"}} className="roomGroups"> 
                    <li> When one signage group is assigned to a location, slides will cycle and repeat continually.    
                    </li>
                    <li> 
                    When multiple signage groups are applied to a location, the slides in each signage group will cycle once before repeating.
                    </li>
                </ol>

                <strong className="strongMenu" style={{marginBottom: 9}}> Adding a signage group  </strong>
                <p className="toDo">
                    Digital signage groups can be added by selecting the “Add Signage Group” button from <strong>Digital Signage > Signage Groups.</strong> 
                    Signage groups require a custom name and location assignment. Slide groups can be assigned to the entire tenant, or one or more campus, building, 
                    room group, or room. Upon creating the signage group, visit the group’s detail page to add, remove, and reorder slides, and adjust location assignments.   
                </p>

                <ol style={{listStyleType:"none"}} className="roomGroups"> 
                    <li>   If there are no slides assigned to a Signage Group, a Date & Time slide will 
                        be displayed. Date & Time slides can be configured in Digital Signage > Signage Settings.     
                    </li>
                    
                </ol>

                <img src={signageGroup} alt="signageGroup" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>


            <div className="navigation" id="signageSetting">
                <h3 className="connectTo" >Signage Settings </h3>
                <p className="toDo">
                    The Meet calendar hall display application can be configured with custom branding and slide settings from <strong>Digital Signage > Signage Settings</strong>.    
                </p>


                <img src={signageSetting} alt="signageSetting" className="addABuilding" style={{marginBottom: 50}}></img>


                <strong className="strongMenu" style={{marginBottom: 9}}>  Meeting room display branding  </strong>
                <p className="toDo">
                    Administrators can update the visual appearance of the Meet calendar hall display to reflect 
                    the organization’s logo, and the colors of text, buttons, and room status indicators. 
                </p>

                <ul className="roomGroups"> 
                    <li>   
                        A  PNG (.png) with transparent background logo is recommended, however 
                        a JPEG (.jpg) image may also be uploaded to display your organization’s logo. Recommended logo height is 64px.     
                    </li>
                    <li>   
                        The color of the room status indicators can be adjusted by using the color picker.    
                    </li>
                    <li>   
                        Adjusting the font color will affect the fonts, icons, and buttons in the Meet calendar hall display app.   
                    </li>
                </ul>

                <strong className="strongMenu" style={{marginBottom: 9}}> Slide dwell duration   </strong>
                <p className="toDo">
                    The amount of time a slide is visible before transitioning to the next slide in a signage group can be controlled 
                    by the “Slide Dwell Duration” drop down. This is a global setting and will apply to all slides, including the date & time slide.  
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Date & time slide settings  </strong>
                <p className="toDo">
                    Date & time slides are the default slide displayed on all Meet calendar hall displays and include the local time, date, 
                    and a custom image. Administrators can configure the frequency with which date & time slides are displayed in relation to messaging slides.    
                </p>

                <ul className="roomGroups"> 
                    <li>   
                        Recommended background image size: 1200px by 976px.    
                    </li>
                    <li>   
                        Remember to Publish Changes after modifying signage settings. Published changes may take 5-10 minutes to display in the meeting room app.     
                    </li>
                </ul>
            </div>




            <div className="navigation" id="devLis">
                <h2 className="SetUpMeetingRooms" >Devices & licensing </h2>
            </div>
            

            <div className="navigation" id="manageSub">
                <h3 className="connectTo" >Manage subscription & licensing </h3>
                <p className="toDo">
                    Subscriptions and licenses for Communify Meet are typically purchased through your reseller.      
                </p>
                <p className="toDo">
                    Administrators can manage their organization's subscriptions and view licenses from Subscriptions 
                    in the Communify Administration Portal. Meet subscriptions are activated when the first Meet calendar hall display application is activated.     
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Adding a subscription  </strong>
                <p className="toDo">
                    To add a subscription, click the "Add Subscription" button from <strong>Subscriptions</strong>.      
                </p>

                
                <img src={addingASubscription} alt="addingASubscription" className="addABuilding" style={{marginBottom: 50}}></img>

                <strong className="strongMenu" style={{marginBottom: 9}}> End of subscription  </strong>
                <p className="toDo">
                    When your subscription expires, your room reservations and digital 
                    signage will be disabled on the calendar hall displays until a subscription is activated.       
                </p>
            </div>


            <div className="navigation" id="devices">
                <h3 className="connectTo" >Devices </h3>
                <p className="toDo">
                    The Communify Meet calendar hall display application is the digital endpoint associated with each meeting 
                    room where rooms status, reservation functionality, and digital signage is delivered.  
                    Devices are paired through the Communify Meet application.        
                </p>

                <ul className="roomGroups"> 
                    <li>   
                        <a href="asdasf">Communify Meet can be downloaded from the Windows Store.</a>      
                    </li>

                </ul>

                <p className="toDo">
                    The devices section segments devices by their status.         
                </p>

                <ul className="roomGroups"> 
                    <li>   
                        <strong>Activated devices</strong> have been successfully paired, synced with a room, and have a valid license.    
                    </li>
                    <li>   
                        <strong>Added devices</strong> have been successfully paired but require a room assignment and/or valid license.     
                    </li>
                    <li>   
                        <strong>Expired devices</strong> are assigned a subscription that has ended. 
                    </li>
                </ul>

                <strong className="strongMenu" style={{marginBottom: 9}}> Pair a device  </strong>
                <p className="toDo">
                    To pair a device with the Communify Administration Portal, select the “Pair Device” button in Devices > Active Devices. A 2-step pairing process is employed to ensure security. 
                    To streamline this process, be sure to have buildings, campuses, offices, and rooms set up first, as well as a subscription already added to your tenant.         
                </p>

                <ol> 
                    <li>Launch the Communify Meet app on the device to be paired. </li>
                    <li> 
                    In the Meet application, input the 8-character tenant code displayed in the Communify Administration Portal to associate the device to your organization and select the “Next” button. 
                    The tenant code will refresh after a timeout.  
                    Unpaired devices that have been previously associated with an organization by entering the tenant code will skip this step. In this case, select the “Next” button in the Communify Administration Portal and proceed to step   
                    </li>

                    <img src={pairADevice} alt="pairADevice" className="addABuilding" style={{marginBottom: 50}}></img>

                    <li>Enter the device PIN shown in the Meet app into the Communify Administration Portal and select the “Next” button.   </li>

                    <img src={pairADevice2} alt="pairADevice2" className="addABuilding" style={{marginBottom: 50}}></img>

                    <li>
                        You will be prompted to optionally assign this device to a room that you created earlier. 
                        You can find the room by selecting a campus and building.  
                    </li>

                    <li>
                        Finally, on the last page of the setup process, you can associate a subscription 
                        with this device by tapping on the toggle switch next to the desired subscription.   
                 </li>
                </ol>

                <p className="toDo">
                    Once this pairing is complete, your device is successfully paired to the Communify 
                    Administration Portal. Devices can be named, assigned to a campus, activated with a valid subscription, and associated with a room.          
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Managing devices  </strong>
                <p className="toDo">
                    Devices can be found in Devices > Activated/Added/Expired sections depending on 
                    their pairing and licensing status. View a device detail page to add or edit device settings.           
                </p>
                <img src={managingDevices} alt="managingDevices" className="addABuilding" style={{marginBottom: 50}}></img>

                <strong className="strongMenu" style={{marginBottom: 9}}> Assign a room  </strong>
                <p className="toDo">
                    To add or edit a device’s room assignment, navigate to the relevant device detail page and then select the “Edit Room Assignment” button.          
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Assign product licensing  </strong>
                <p className="toDo">
                    To add or edit a license on a device, select the device and then select the “Manage Licensing” button from a Device Detail page.           
                </p>
                <img src={assignProductLicensing} alt="assignProductLicensing" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>



            <div className="navigation" id="meetAppSch">
                <h2 className="SetUpMeetingRooms" >Meet app scheduling</h2>
            </div>


            <div className="navigation">
            <h3 className="connectTo" id="schMeetings">Scheduling Meetings  </h3>
                <p className="toDo">
                    Communify Meet allows you to reserve rooms quickly and easily.           
                </p>

                <strong className="strongMenu" style={{marginBottom: 9}}> Meet Now  </strong>
                <p className="toDo">
                    Meet Now helps you reserve a space simply and immediately. Select the “Meet Now”
                    button to set how long you would like to reserve the meeting room.            
                </p>

                <img src={meetNow1} alt="meetNow1" className="addABuilding" style={{marginBottom: 50}}></img>
                <p className="toDo">
                    Use the “+” or “-“ buttons to set how long you need the meeting room. Select the “Confirm” 
                    button to reserve the room. You can reserve a room up until the start of the next room reservation.           
                </p>
                <img src={meetNow2} alt="meetNow2" className="addABuilding" style={{marginBottom: 50}}></img>

                <strong className="strongMenu" style={{marginBottom: 9}}>Reserve </strong>
                <p className="toDo">
                    If you would like to reserve a room for a later time, or invite attendees to your meeting, select the “Reserve” button.             
                </p>

                <img src={reserve1} alt="reserve1" className="addABuilding" style={{marginBottom: 50}}></img>
                <p className="toDo">
                    Fill in the meeting detail fields. When you are complete, press the “Confirm” button.           
                </p>
                <img src={reserve2} alt="reserve2" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>


            <div className="navigation" id="viewEndMeetings">
                <h3 className="connectTo"  style={{marginBottom: 16}}>View & End Meetings  </h3>
                <strong className="strongMenu" style={{marginBottom: 9}}>View Meeting</strong>
                <p className="toDo">
                    Select a meeting room block from the “Today’s Agenda” section.           
                </p>


                <img src={view1} alt="view1" className="addABuilding" style={{marginBottom: 50}}></img>
                <strong className="strongMenu" style={{marginBottom: 9}}>End Meeting </strong>
                <p className="toDo">
                    To free up a meeting room when you finish early, press the “End Meeting” button. Pressing this button will set the meeting room display to “Available”.            
                </p>
                <img src={view2} alt="view2" className="addABuilding" style={{marginBottom: 50}}></img>
            </div>


            <div className="navigation" id="contactInfo">
                <h2 className="connectTo"  style={{marginBottom: 16}}>Contact information  </h2>
                <div>
                    <h3 className="strongMenu" style={{marginBottom: 9}} id="supportF">Support  </h3>
                    <a href="https://www.google.ru/" className="mainNav">support@communifyapp.com </a>
                </div>

                <div>
                    <h3 className="strongMenu" style={{marginBottom: 9}} id="salesInq">Sales Inquiries</h3>
                    <a href="https://www.google.ru/" className="mainNav">sales@communifyapp.com </a>
                </div>
            </div>

            
        </div>
    )
}

export default Main