import React from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                     Hi , I am Ravi Kumar Rana , I am a fourth-year computer science student at Chandigarh University with a
                     zeal of producing robust code having a strong foundation in software development.
                </div>
                <div className="socialIcons">
                    <a href="https://www.instagram.com/_.rvi_/" target="_blank"><span className="icon">
                        <FaInstagram />
                    </span></a>
                    
                    <a href="https://www.linkedin.com/in/ravi-kumar-rana-710934159/" target="_blank"><span className="icon"> <FaLinkedin /> </span></a>
                     
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

