import React from 'react';
import ReactDom from 'react-router-dom';
import './MemberDashboard.css';
//import { getUser, removeUserSession } from './Utils/Common';
 
export default function MemberDashboard(props) {
   // const user = getUser();
   const username = "";

    try
    {
        username = axios({
            method: 'get',
            url: '/username',
          }).then(res=>{
            console.log(res);
            updateData(res.data)
          });
    }
    catch
    {
        console.log("Fail to get username")
    }


    // handle click event of logout button
    const handleLogout = () => {   
        //removeUserSession(); 
        props.history.push('/login');
    }
 
    return (
        <div className="main">      
            <div className="announcement">

                    <h2 className="announcement__title">Welcome</h2> {username}
                    <p>[Updated: 12/03/2021] We’re currently in BETA for volunteers and will be releasing to the public soon.</p>
                    <p>For technical support regarding this website, please email itsupport@donationgram.co.uk</p>
                
            </div>
            <div className="volunteer-section">
                <p className="heading"><strong>Volunteer Detail</strong></p>
                <div className="volunteer-detail">
                    <p>Name:</p>
                    <p>Member Since:</p>
                </div>
            </div>

            <div class="content open">
                <div class="wrapper">
                    <div class="masonry">
                        <div class="item">
                            <p><u>Volunteering</u></p>
                            <ul>
                            <li><a href="">Hours Log</a></li>
                            <li><a href="">Intranet</a></li>
                            <li><a href="">Events</a></li>
                            <li><a href="https://goo.gl/maps/6PVA1KfbDg9LH53o7">Map</a></li>
                            <li><a href="">Booking System</a></li>
                            <li><a href="">Contacts</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
            
            <input className="log-out" type="button" onClick={handleLogout} value="> LOG OUT >" />
        
        </div>
    );
}
  
