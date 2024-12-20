import React from "react";
import frameImage from '../../components/imgs/Frame 1(2).svg';

import Nav from '../../components/Nav'

function Header() {
    return (
        <div className="header-container">
            <Nav/>
            <header>
                <h1>Suvaco do Cristo</h1>
                <img src={frameImage} alt="Frame" className="header-image" />
                <div className="header-links">
                    <a href="#"><i className="ri-instagram-line"></i></a>
                    <a href="#"><i className="ri-youtube-line"></i></a>
                    <a href="#"><i className="ri-facebook-box-line"></i></a>
                    <a href="#"><i className="ri-mail-line"></i></a>
                </div>
            </header>
        </div>
    );
}

export default Header;
