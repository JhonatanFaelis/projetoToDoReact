
import React, { useState } from 'react'
import './App.css'
import Card from './components/card-todo/Card';
import TodoForm from './components/todoForm/TodoForm';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

function App() {

  //sempre que tiver que manipular valor tem que usar useState, e tem que estar dentro do scopo
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para o curso",
      category: "Estudos",
      isCompleted: true
    },
    {
      id: 3,
      text: "Ir para Academia",
      category: "Saude",
      isCompleted: true
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc")

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text: text,
      category: category,
      isCompleted: false
    }]

    setTodos(newTodos)
  }

  const removeTodo = (id) => {

    if (!confirm('Deseja realmente excluir a tarefa?')) return

    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null);

    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  }


  return (
    <div className='app'> 
      <h1>Lista de Tarefas</h1>
      <Search setSearch={setSearch} search={search}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className='todo-list'>
        {todos
          .filter((todo) => filter === "All" ? true : filter ==="Completed" ? todo.isCompleted : !todo.isCompleted)
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a,b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
          .map((todo) => (
          <Card key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
        ))

        }
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App

