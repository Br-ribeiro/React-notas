import React from 'react';
import { ListaDeNotas } from './componets/ListaDeNotas';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Excreva sua nota..."></textarea>
        <button>Criar nota</button>
      </form>
      <ListaDeNotas/>
      </section>
  )
}

export default App;
