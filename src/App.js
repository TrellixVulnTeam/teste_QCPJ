import './App.css';

import Header from './components/header';
import Footer from './components/footer';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Textos from './pages/texts'
import Contato from './pages/contact'
import Questoes from './pages/questions/'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/textos" component={Textos}/>
        <Route path="/consultório" component={Contato}/>
        <Route path="/questoes" component={Questoes}/>
     
      <footer>
        <Footer/>
      </footer>
    </BrowserRouter>
  </div>

  );
}

export default App;
