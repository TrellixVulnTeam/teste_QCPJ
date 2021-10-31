import './style.css';

import React, { useState } from 'react';

import linkedin from "../../assets/linkedin.png"
import lattes from "../../assets/lattes.png"
import instagram from "../../assets/instagram.png"
import email from "../../assets/email.png"

function Footer() {
    return(
        <footer>
           <div className="part-one">
                <div className="address">
                    <p>
                        Rua Espírito Santo, 466,
                        <br></br>
                        Sala 502, Centro, Belo Horizonte.
                    </p>
                </div>
                <div className="icons">
                    <a href=""><img src={linkedin} alt="linkedin" /></a>
                    <a href=""><img src={lattes} alt="lattes" className="lattes" /></a>
                    <a href=""><img src={instagram} alt="instagram" /></a>
                    <a href=""><img src={email} alt="email" /></a>
                </div>
           </div>
           <div className="part-two">
                <p className="copyright">
                    Copyright © 2021 | Desenvolvido por <b><a href="https://www.linkedin.com/in/joao-vitor-vazz/">João Vítor Vaz</a></b>
                </p>
           </div>
        </footer>
    );
}

export default Footer; 
