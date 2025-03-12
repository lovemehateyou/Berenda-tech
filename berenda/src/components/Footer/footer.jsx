import React from 'react'
import '../Footer/footer.css';

import email from '../../assets/Footer/Asset 11.png'
import insta from '../../assets/Footer/Instagram.png'
import linkedin from '../../assets/Footer/LinkedIn.png'
import berenda from '../../assets/Footer/berenda_web.png'
import phone from '../../assets/Footer/phone icon.png'


export default function Footer() {

  return (
    <div className="content">

        <div className="text">
            <p>Thinking Design,<br/><span>Think Us</span>.</p>
            <a href="#">
                <img src={email} alt=""/>
            </a>
        </div>
        
    <div className="footer">


        <div className="social">
            <h4>FOLLOW US</h4>

            <div className="social_logo">
                <div className="img_container">
                    <a href="https://www.instagram.com/berendatech/"><img src={insta} alt=""/></a>
                </div>
                <div className="img_container">
                    <a href="https://www.linkedin.com/company/berendatech/"><img src={linkedin} alt=""/></a>
                </div>

            </div>

            <a className="link_web">
                <img src={berenda} alt=""/>
            </a>

        </div>

    
        <div className="call">
            <h4>CALL US</h4>
            <p className="call_team">Call our team</p><br/>
            <img src={phone} alt=""/>
            <p>+251 93 766 0898</p><br/>
            <img src={phone} alt=""/>
            <p>+251 90 345 9177</p>
        </div>

        <div className="home">
            <a href="home .html"><h4>HOME</h4></a>
            <a href="About.html">About us</a>
            <a href="what_we_do.html">What we do</a>
            <a href="contact.html">Contact</a>
        </div>
        
       
    </div>
    
    </div>

  )
}
