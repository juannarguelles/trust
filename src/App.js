import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index/index';
import Nosotros from './pages/nosotros';
import Garantia from './pages/garantia';
import Requisitos from './pages/requisitos';
import Calculador from './pages/calculador';
import Propietarios from './pages/propietarios';
import Contacto from './pages/contacto';
import Preguntas from './pages/preguntas-frecuentes';
import Footer from './components/Footer/footer';

function App() {  
  return (
    <Router>
        <Navbar/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/nosotros' component={Nosotros} />
            <Route path='/garantia' component={Garantia} />
            <Route path='/requisitos' component={Requisitos} />
            <Route path='/calculador' component={Calculador} />
            <Route path='/propietarios' component={Propietarios} />
            <Route path='/contacto' component={Contacto} />
            <Route path='/preguntas-frecuentes' component={Preguntas} />
          </Switch>
        <Footer/>
    </Router>
  );
}

export default App;