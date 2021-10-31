import './style.css';

import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Mapa from '../../components/mapa';

import Slideshow from '../../components/slider';
import linkedin from "../../assets/linkedin.png"
import lattes from "../../assets/lattes.png"

function Contato() {       
    return(
        <div className="contact">
            <div className="one">
                    <div className="left-one">
                        <p>CONSULTÓRIO </p>
                        <Mapa/>
                    </div>
                    <div className="right-one">
                       <h2>FORMAÇÃO</h2>
                       <p>Mestrando em Psicanálise e Cultura pela Universidade Federal de Minas Gerais
                        <td></td>
                        Graduado em Psicologia pela Universidade Federal de Minas Gerais
                        <td></td>
                        Formação Complementar Aberta em Etnologia Ameríndia e Estudos Decoloniais no 
                        Dep. de Antropologia e Arqueologia da UFMG</p>
                        <p>Integrante o Núcleo de Pesquisas Psicanálise e Laço Social no Contemporâneo (PSILACS), 
                            do Departamento de Psicologia da Universidade Federal de Minas Gerais</p>
                        <hr></hr>
                        <div className="icons">
                            <a href=""><img src={lattes} alt="lattes" className="lattes" /></a>
                            <a href=""><img src={linkedin} alt="linkedin" /></a>
                        </div>
                    </div>
            </div>
            <div className="two">
                
            </div>
        </div>
        );
    }
        
    export default Contato;
        