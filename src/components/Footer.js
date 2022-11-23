import React from "react"
import ReactDOM from "react-dom"
let Twitter = require("../images/Twitter.png")
let Instagram = require("../images/Instagram.png")
let Github = require("../images/GitHub.png")
let Facebook = require("../images/Facebook.png")
export default function Footer() {
    return (
        <div className="footer-img">
            <img src={Twitter} alt="Twitter"/>
            <img src={Facebook} alt="Facebook"/>
            <img src={Instagram} alt="Instagram"/>
            <img src={Github} alt="GitHub"/>
        </div>
    )
}