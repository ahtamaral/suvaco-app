import React from "react";
import './footer.css'

function Footer(){

    return(
        <footer>
            <div className="grid">
                
                <div className="flex">
                    <p>Suvaco do Cristo</p>
                    <p className="mid">Todos os direitos reservados.</p>
                    <div className="socials">
                        <a href="#">
                            <i className="ri-instagram-line"></i>
                                <span>Instagram</span>
                        </a>
                        <a href="#">
                            <i className="ri-youtube-line"></i>
                                <span>Youtube</span>
                        </a>
                        <a href="#">
                            <i className="ri-facebook-box-line"></i>
                                <span>Facebook</span>
                        </a>
                        <a href="#">
                            <i className="ri-mail-line"></i> 
                                <span>Email</span>
                        </a>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer;