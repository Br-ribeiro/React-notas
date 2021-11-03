import React, { Component } from 'react';
import ListaDeNotas  from './componets/ListaDeNotas';
import  FormularioCadastro  from './componets/formularioCadastro';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();
    this.notasc = [];
    this.state = {};
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notasc.push(novaNota);
    console.log(this.notasc.length)
    this.setState({
      notas:this.notas
    })
  
  }
  
  render() {
    return (
      <section>
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.notasc} />
      </section>
    );
  }
}

export default App;
