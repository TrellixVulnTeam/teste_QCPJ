import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import Home from '../pages/home'
import Textos from '../pages/texts'
import Contato from '../pages/contact'
import Questoes from '../pages/questions/'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/home" exact component={Home}/>
            <Route path="/textos" exact component={Textos}/>
            <Route path="/contato" exact component={Contato}/>
            <Route path="/questoes" exact component={Questoes}/>
        </Switch>
        </BrowserRouter>
    );
}
