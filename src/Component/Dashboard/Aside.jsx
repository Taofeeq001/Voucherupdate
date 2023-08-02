import React from "react";
import './Aside.css';
import {BsArrowLeft} from 'react-icons/bs'


const Aside =()=>{
    return(
        <div className="aside">
            <button className="back"><BsArrowLeft/> Back To Page</button>
            <div className="aside-info">
                <p>Business Info.</p>
                <p>Contact Info.</p>
                <p>Owner</p>
                <p>Document</p>
                <p className="payment">Payment Info.</p>
            </div>
        </div>
    )
}
export default Aside;