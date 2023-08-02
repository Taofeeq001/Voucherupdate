import React, { useState } from "react";
import './Body.css';
import img from '../../Images/Vector (6).png'
import arrowd from '../../Images/Vector (8).png'

const Body = () =>{
    const [business_email, setBusinessEmail] = useState("");
    const [disputeEmail, setDisputeEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [countryCode, setCountryCode] = useState("")
    const [businessAddress, setBusinessAddress] = useState("");
    const [webLink, setWebLink] = useState("");
    const [taxId, setTaxId] = useState("");
    const [error, setError] = useState(false)


    const handleSubmit = (e) =>{
        const data = new FormData();
        data.set("business_email", business_email);
        data.set("business_address", businessAddress);
        data.set("taxation_id", taxId);
        data.set("website_link", webLink);
        data.set("dispute_email", disputeEmail);

        e.preventDefault();
        if(!business_email){
            alert("Business field is compulsory")
        }else if(!disputeEmail){
            alert("Sispute field is compulsory")
        }else if(!phone){
            alert("Input Phone number")
        }else if(!businessAddress){
            alert("Business Address must not be empty")
        }
        
        else if(businessAddress && business_email && phone && disputeEmail){
            const base_url = `https://api.voucherpay.online/compliance/contact`
            const info = {
                "business_email": business_email,
                "business_address": businessAddress,
                "business_phone_number": phone,
                "taxation_id": taxId,
                "website_link":webLink,
                "despute_email": disputeEmail
            }

            try {
                const postData = async () =>{
                    const response = await fetch(base_url,{
                        method: "POST",
                        headers: {"content-type": "application/json"},
                        body: JSON.stringify(info),
                        Credential: "include",
                        mode: "no-cors"
                    })
                    console.log(response)
                    if(response.ok){
                        alert("Post Successfully")
                    }else{
                        const {message} = response;
                        setError(true)
                    }
                }
                postData()
            } catch (error) {
                setError(true)
            }
        }
    }
    return(
        <div className="body">
            <div className="body-top">
                <img src={img} alt="" />
                <p>Hi, welcome. you’re currently on test mode. fill all compliance here to switch your mode.</p>
            </div>
            <form onSubmit={handleSubmit} className="body-form" action="">
                <h3>Contact Information</h3>
                <div className="information">
                    <div className="details1">
                        <div className="infor">
                            <label htmlFor="">Business Email*</label>
                            <input type="text"
                            value={business_email}
                            onChange={(event)=> setBusinessEmail(event.target.value)} 
                            placeholder="Jaysalami.Msme@gmail.com"
                            name="business_email"/>
                        </div>
                        <div className="infor">
                            <label htmlFor="">Dispute Email*</label>
                            <input type="text"
                            value={disputeEmail}
                            onChange={(event)=> setDisputeEmail(event.target.value)} 
                            placeholder="Jaysalami.Msme@gmail.com"
                            name="dispute_email"/>
                        </div>
                    </div>
                    <div className="details1">
                        <div className="infor2">
                            <label htmlFor="">Phone Number*</label>
                            <div className="coverbtn">
                                {/* <button>+234 <img src={arrowd} alt="" /></button> */}
                                <select name="" id="">
                                    <option>+234</option>
                                </select>
                                <input type="text"
                                value={phone}
                                onChange={(event)=> setPhone(event.target.value)} 
                                placeholder="090 345 567 55" 
                                name="business_phone_number"/>
                            </div>
                        </div>
                        <div className="infor">
                            <label htmlFor="">Business Address*</label>
                            <input type="text"
                            value={businessAddress}
                            onChange={(event)=> setBusinessAddress(event.target.value)}
                            name="business_address" 
                            placeholder="Jaysalami.Msme@gmail.com"/>
                        </div>
                    </div>
                    <div className="details1">
                        <div className="infor">
                            <label htmlFor="">Website Link  <span>(Optional)</span></label>
                            <input type="text"
                            value={webLink}
                            onChange={(event)=> setWebLink(event.target.value)}
                            name="website_link" placeholder="https://jaysacad.com"/>
                        </div>
                        <div className="infor">
                            <label htmlFor="">Taxation ID <span>(Optional)</span></label>
                            <input type="text"
                            value={taxId}
                            onChange={(event)=> setTaxId(event.target.value)}
                            name="taxation_id" placeholder="3401406477"/>
                        </div>
                    </div>
                    <div className="change">
                        <button type="submit">Save Change</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Body;