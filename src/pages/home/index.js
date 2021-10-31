import './style.css';

import React from 'react';

import logo from "../../assets/logo.png"
import teste from "../../assets/teste.png"

function Home() {       
    return(
        <div>
            <div className="home">
                <section className="first-part">
                    <img src={logo}/>
                </section>
                <section className="second-part">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="teste">
                        <div className="title">
                            <p>GUILHERME RODRIGUES</p>
                        </div>
                        <div className="subtitle">
                            <p>   PSICANÁLISE</p>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <br></br>
                    <br></br>
                    <div className="text">
                        <p>“Então lhe dizemos que o êxito da psicanálise depende de ele observar e comunicar tudo o que lhe passa pela mente e não ceder 
                            à tentação de suprimir um pensamento porque lhe parece irrelevante ou não pertence ao tema, ou despropositado. 
                            Tem que adotar uma postura completamente imparcial em relação aos pensamentos; pois é justamente devido à 
                            crítica que ele normalmente não encontra a resolução que se busca no sonho, da ideia obsessiva etc. 
                            Durante o trabalho psicanalítico, percebi que a disposição psíquica do homem que reflete é totalmente 
                            diferente daquela do homem que observa seus processos psíquicos. Na reflexão entra em jogo uma atividade psíquica 
                            a mais do que na mais atenta auto-observação, como revelam também a fisionomia tensa e a testa enrugada do homem que reflete,
                            em contraste com a expressão tranquila daquele que observa. [...] O homem que observa a si mesmo só precisa se dar ao trabalho de 
                            suprimir a crítica; quando consegue fazê-lo, vem-lhe à consciência inúmeros pensamentos que em outras circunstâncias teriam lhe escapado.”
                        </p>
                        <b>FREUD, 1900, INTERPRETAÇÃO DOS SONHOS.</b>
                    </div>
                    <div> 

                    </div>

                    <div className="margin-paragraph">
                   </div>

                    <div className="teste">
                        <div className="title">
                            <p> </p>
                        </div>
                        
                        <div className="subtitle-publication">
                            <p>ÚLTIMAS PUBLICAÇÕES</p>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <br></br>
                    <br></br>
                    <br></br>

                    <section >
                        <div className="blocks">
                            <div className="internal-blocks">
                                <img src={teste}/>
                                <p className="text-blocks">Título do texto</p>
                            </div>
                            <div className="internal-blocks">
                                <img src={teste}/>
                                <p className="text-blocks">Título do texto</p>
                            </div>
                            <div className="internal-blocks">
                                <img src={teste}/>
                                <p className="text-blocks">Título do texto</p>
                            </div>
                        </div>
                    </section>
                   <div className="margin">
                   </div>

                </section>             
            </div>
        </div>
    );
}
    
export default Home;
    