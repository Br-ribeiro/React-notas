import React, { Component } from 'react';
import ListaDeNotas  from './componets/ListaDeNotas';
import  FormularioCadastro  from './componets/formularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  criarNota(titulo, texto){
    console.log(`Uma nova nota com o titulo ${titulo}  e com o texto ${texto}`)
  }
  
  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
