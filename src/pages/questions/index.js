import './style.css';

import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import logo from "../../assets/aaaa.png"
import img01 from "../../assets/img01.jpg"
import img03 from "../../assets/img03.png"
import img04 from "../../assets/img04.png"

function Questoes() {     
    
  function handlerDropdown(e, index) {
    e.preventDefault();
    const dropdown = document.querySelector("div#dropdown__"+index);
    const content = document.querySelector("div#dropdown__content__"+index);

    dropdown.classList.toggle('open')
    dropdown.classList.toggle('close')
    setTimeout(() => {
        content.classList.toggle('open')
        content.classList.toggle('close')
    }, 450)
  }

return(
    <div className="questions">
        <div className="content">
            <div className="left-questions">
                <img src={logo} />
            </div>

            <div className="rigth-questions"> 
                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 1)}>
                        <p className="title">O que é psicanálise?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__1" className="dropdown close">
                        <div id="dropdown__content__1" className="content close">
                            <p>
                            Entre a técnica sugestiva e a analítica há o maior contraste, 
                            aquele contraste que o grande Leonardo da Vinci condensou para as artes nas fórmulas per via di porre e per via di levare. 
                            A pintura, diz Da Vinci, trabalha per via di porre; é que ela coloca montinhos de tinta onde eles antes não existiam, na tela sem cores; 
                            a escultura, por sua vez, procede per via di levare, já que retira da pedra o necessário para revelar a superfície da estátua nela contida. 
                            De forma muito semelhante, meus senhores, a técnica sugestiva tenta fazer efeito per via di porre, ela não se preocupa com a origem, 
                            a força e a importância dos sintomas da doença, mas aplica algo, que é a sugestão, da qual ela espera que seja forte o suficiente para impedir a
                            ideia patogênica de se expressar. A terapia analítica, por sua vez, não quer aplicar nada, não quer introduzir algo novo, mas quer tirar, extrair, 
                            e para esse fim, ela se ocupa da gênese dos sintomas da doença e do contexto psíquico da ideia patogênica, cuja eliminação é seu objetivo.
                            </p>
                            <b>
                                Sobre psicoterapia - 1905
                            </b>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 2)}>
                        <p className="title">O que não é psicanálise?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__2" className="dropdown close">
                        <div id="dropdown__content__2" className="content close">
                            <p>
                            A toda hora, há tratamentos da moda e médicos da moda, que dominam principalmente a sociedade elegante, onde a ambição 
                            de se antecipar ao outro e fazer igual aos mais elegantes representa as mais poderosas forças motrizes anímicas. 
                            Esses tratamentos da moda desenvolvem efeitos efeitos de cura que não pertencem à sua área de atuação, 
                            e os mesmos meios conseguem resultados muito melhores nas mãos do médico da moda, que se tornou famoso por ter ajudado a uma personalidade de destaque, 
                            do que nas de outros médicos. Assim, há milagreiros humanos e milagreiros divinos; salvo que estes últimos, elevado à fama pelo benefício da moda e pela imitação, 
                            gastam-se muito rápido, como é próprio à natureza das forças que agem através deles. A compreensível insatisfação com a ajuda médica muitas vezes insuficientes, 
                            talvez também a revolta contra a obsessão pelo pensamento científico, que reflete para o homem a implacabilidade da natureza, hoje e em todos os tempos, 
                            criaram de novo uma condição curiosa para o poder de cura de pessoas e meios. A expectativa crédula apenas irá se estabelecer quando o ajudante não for um médico e 
                            puder ser arvorar em nada entender da fundamentação ciêntiica para a arte da cura, quando o meio não for comprovado por um exame minucioso, mas, por exemplo, 
                            recomendado por uma preferência popular. Disso advém a quantidade excessiva de artes de cura natural e de artistas da cura natural, que agora novamente atacam os médicos 
                            e o exercício de seu ofício e dos quais podemos dizer com pelo menos alguma certeza que prejudicam mais do que ajudam àqueles em busca de cura.
                            </p>
                            <b>
                                Tratamento psíquico (tratamento anímico) – 1890
                            </b>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 3)}>
                        <p className="title">O que é que não vai bem?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__3" className="dropdown close">
                        <div id="dropdown__content__3" className="content close">
                            <p>
                            Numa analogia que há muito nos é familiar, o sintoma se compara a um corpo estranho que incessantemente gera estímulos e reações no tecido em que se
                            incrustou. [...] Ocorre uma adaptação ao pedaço do mundo interior alheio ao Eu, representado pelo sintoma, tal como normalmente o Eu realiza diante
                            do mundo exterior. [...] Desse modo o sintoma gradualmente se torna o representante de importantes interesses, adquire valor para a afirmação de si, 
                            entrelaça-se cada vez mais intimamente com o Eu, torna-se imprescindível para ele. [...] 
                            Resulta aquilo que conhecemos como o benefício (ganho) da doença no tocante à neurose. 
                            Ela favorece o esforço do Eu em incorporar o sintoma e aumenta a fixação deste.
                            </p>
                            <b>
                                Inibição, sintoma e angústia – 1926
                            </b>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 4)}>
                        <p className="title">O que é pipipi popopo?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__4" className="dropdown close">
                        <div id="dropdown__content__4" className="content close">
                            <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaa
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 5)}>
                        <p className="title">O que é pipipi popopo?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__5" className="dropdown close">
                        <div id="dropdown__content__5" className="content close">
                            <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaa
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 6)}>
                        <p className="title">O que é pipipi popopo?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__6" className="dropdown close">
                        <div id="dropdown__content__6" className="content close">
                            <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaa
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 7)}>
                        <p className="title">O que é pipipi popopo?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__7" className="dropdown close">
                        <div id="dropdown__content__7" className="content close">
                            <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaa
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>

                <div className="container">
                    <div className="menu" id="btn" onClick={e => handlerDropdown(e, 8)}>
                        <p className="title">O que é pipipi popopo?</p>
                        <add>+</add>
                    </div>
                    <div id="dropdown__8" className="dropdown close">
                        <div id="dropdown__content__8" className="content close">
                            <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaaaaaaaaaaaaaa
                            aaaaaaaaaaaa
                            </p>
                        </div>
                    </div>
                    <br></br>
                </div>
            </div>
        </div>
        <div className="symptoms">
            <div className="symptoms-one">
                <img src={img01}/>
                <div className="symptoms-two">
                    <b>ESPECIALIDADES</b>
                    <p>Ansiedade</p>
                    <p>Depressão</p>
                    <p>Estresse <br></br>pós-traumático</p>
                    <p>Transtorno <br></br>obsessivo-compulsivo</p>
                    <p>Fobias</p>
                    <p>Transições de vida</p>
                    <p>LGBTQIA+</p>
                    <p>Identidade de gênero</p>
                </div>
                <img src={img03}/>
                <img src={img04}/>
            </div>
        </div>

        <div className="symptoms-respnsive">
            <div className="symptoms-one-responsive">
                <img src={img01}/>
                <div className="symptoms-two">
                    <b>ESPECIALIDADES</b>
                    <p>Ansiedade</p>
                    <p>Depressão</p>
                    <p>Estresse <br></br>pós-traumático</p>
                    <p>Transtorno <br></br>obsessivo-compulsivo</p>
                    <p>Fobias</p>
                    <p>Transições de vida</p>
                    <p>LGBTQIA+</p>
                    <p>Identidade de gênero</p>
                </div>
            </div>
            <div className="symptoms-one-responsive-rigth">
                <img src={img03}/>
                <img src={img04}/>
            </div>
        </div>
</div>
    );
}
    
export default Questoes;