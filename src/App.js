import React, { Component } from 'react';
import ListaDeNotas  from './componets/ListaDeNotas';
import  FormularioCadastro  from './componets/formularioCadastro';
import ListaDeCategorias from './componets/ListaDeCategorias/';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  
  constructor(){
    super();

    this.state = {
      notas:[],
      categorias:["games","Musicas"]
    };
  }

  criarNota(titulo, texto, categoria){
    const novaNota = {titulo, texto, categoria};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  
  }

  adicionarCategoria(nomeCategoria){
      const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
      const novoEstado = {...this.state, categorias:novoArrayCategorias};
      this.setState(novoEstado)
  }

  deletarNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1)
    this.setState({notas:arrayNotas})
  }
  
  render() {
    return (
      <section>
        <FormularioCadastro
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            apagarNota={this.deletarNota.bind(this)}
            notas={this.state.notas}

          />
        </main>
      </section>
    );
  }
}

export default App;
