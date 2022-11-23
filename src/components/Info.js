import React from "react"
import ReactDOM from "react-dom"
let Olek= require("../images/Olek.png")  
let Email= require("../images/Email.png")
let LinkedIn= require("../images/ln.png")
export default function Info() {
    return (
        <header>
            <img src={Olek}/>
            <h1>Alexander Wojno</h1>
            <h2>Junior Frontend Developer</h2>
            <p>google.com</p>
            <button className="email-btn"><img src={Email} alt="Email" className="email-img"/>Email</button>
            <button className="in-btn"><img src={LinkedIn} alt="In" className="in-img"/>LinkedIn</button>
        </header>
    )
}