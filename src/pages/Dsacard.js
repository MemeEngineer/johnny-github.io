import {DSAbank} from "../data.js"
// import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Dsacard({setDsa}){
    
    function handleClick(dsa){
        setDsa(dsa);
    }
    return(
        <div>
           
            {DSAbank.map((data) => {
        return (
            <div>
                <NavLink to="/Dsadisplay" exact> <div onClick={()=> handleClick(data)}>
                Title: {data.title}</div></NavLink>

            </div>
        )
        })}
        
        </div>
    )
}