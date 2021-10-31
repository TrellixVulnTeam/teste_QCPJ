import './style.css';

import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {

    const [toggle, setToggle] = useState(false);

    const changeToggle = () => {
        setToggle(!toggle);
    }

    return(
        <header>
            <div className="header-container">
                <div 
                    className={toggle ? 'burger' : 'close' } 
                    onClick={ () => {
                        changeToggle();
                        console.log(toggle);
                    }} >

                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>

                <div className="img-container">
                </div>
                
                <div id="lista" className={toggle ? "open-drawer" : "drawer"}>

                    <Link to="\home" className="lista_link" onClick={ () => { changeToggle(); console.log(toggle);}} offset={() => 100} href='/home'>
                        INÍCIO
                    </Link>   

                    <Link to='/questoes' className="lista_link" onClick={ () => { changeToggle(); console.log(toggle);}} offset={() => 100} href='/questoes'>
                        QUESTÕES
                    </Link>    

                    <Link to="" className="lista_link" onClick={ () => { changeToggle(); console.log(toggle);}} offset={() => 100} href='/textos'>
                        TEXTOS
                    </Link>    

                    <Link to="" className="lista_link" onClick={ () => { changeToggle(); console.log(toggle);}} offset={() => 100} href='/contato'>
                        CONSULTÓRIO
                    </Link>    
                </div>

            </div>
        </header>
    );
}

export default Header;
