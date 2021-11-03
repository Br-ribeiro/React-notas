import React, { Component } from 'react';
import ListaDeNotas  from './componets/ListaDeNotas';
import  FormularioCadastro  from './componets/formularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
