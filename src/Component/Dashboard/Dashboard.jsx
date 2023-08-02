import React from "react";
import './Dashboard.css'
import Aside from "./Aside";
import {BsSearch} from 'react-icons/bs'
import alert from '../../Images/Vector (5).png'
import pic from '../../Images/Group 40.png'
import logo from '../../Images/image 1.png'
import Body from "./Body";



const Dashboard = () =>{
    return(
        <div className="container">
            <div className="container-top">
                <img src={logo} alt="" />
                <div className="right-top">
                    <BsSearch/>
                    <img src={alert} alt="" />
                    <img src={pic} alt="" />
                </div>
            </div>
            <div className="dashboard-content">
                <Aside/>
                <Body/>
            </div>
        </div>
    )
}
export default Dashboard;