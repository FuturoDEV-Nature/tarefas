import { useState } from 'react';
import ListaTarefas from './components/listaTarefas.jsx';
import Formulario from './components/formulario.jsx';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const handleSubmit = (data) => {
    setTarefas([...tarefas, data]);
    console.log(tarefas);
    
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <ListaTarefas tarefas={tarefas} />
      <Formulario submit={handleSubmit} />
    </>
  )
}

export default App
