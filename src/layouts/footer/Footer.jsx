import React from "react";

function Footer(){

    return(
        <footer>
            <div className="grid">
                
                <div className="flex">
                    <p>Suvaco do Cristo</p>
                    <p className="mid">Todos os direitos reservados.</p>
                    <div className="socials">
                        <a href="#"><i className="ri-instagram-line"></i> Instagram</a>
                        <a href="#"><i className="ri-youtube-line"></i> Youtube</a>
                        <a href="#"><i className="ri-facebook-box-line"></i> Facebook</a>
                        <a href="#"><i className="ri-mail-line"></i> Email</a>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer;