import './style.css';

import React from 'react';

import logo from "../../assets/logo-fina.png"
import teste from "../../assets/teste.png"
import Header from '../../components/header';
import Footer from '../../components/footer';
import Slider2 from '../../components/slider2/slider.js';

function Textos() {       
    return(
        <div>
            <div className="texts-page">
                <section className="section-one"> 
                    <img src={logo} />
                </section>
                <section className="section-two"> 
                        <div className="texts-publications">
                            <p>ÚLTIMAS PUBLICAÇÕES</p>
                        </div>
                        <div className="horizontal-line"></div>
                    <div className="blocks-texts">
                        
                        <div className= "container">
                            <img src={teste}/>
                            <p>TÍTULO</p>
                            <b>24 de Julho de 2021</b>
                        </div>
                        <div className= "container">
                            <img src={teste}/>
                            <p>TÍTULO</p>
                            <b>24 de Julho de 2021</b>
                        </div>
                        <div className= "container">
                            <img src={teste}/>
                            <p>TÍTULO</p>
                            <b>24 de Julho de 2021</b>
                        </div>
                    </div>
                </section>
            </div>  
            <section classsName="text-page">
                <section className="sectionaa">
                    <div className="texts-publications">
                                <p>ARTIGOS PUBLICADOS EM LIVROS E REVISTAS</p>
                    </div>
                    <div className="horizontal-line"></div>
                    {/*<section className="box-slider">  
                    </section>*/}
                    <Slider2/>
                    </section>
            </section>
        </div>
    );
}
    
export default Textos;
    