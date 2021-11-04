import React, { Component } from 'react';
import ListaDeNotas  from './componets/ListaDeNotas';
import  FormularioCadastro  from './componets/formularioCadastro';
import ListaDeCategorias from './componets/ListaDeCategorias/';
import "./assets/App.css";
import './assets/index.css';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {
  
  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  
  render() {
    return (
      <section>
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria={this.categorias.adicionarCategoria}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas}
            notas={this.notas.notas}

          />
        </main>
      </section>
    );
  }
}

export default App;
