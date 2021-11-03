import React, { Component } from 'react';
import ListaDeNotas  from './componets/ListaDeNotas';
import  FormularioCadastro  from './componets/FormularioCadastro';

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
