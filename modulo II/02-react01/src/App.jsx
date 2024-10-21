import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Saludo } from './components/saludo.jsx'
import { Usuario } from './components/Usuario.jsx'
import { Ingredientes } from './components/Ingredientes.jsx'
import { Formulario } from './components/Formulario.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [nombre, setNombre] =useState("")

  let usuarios = [
    { id: 1, title: "Luciana", email: "luciana@test.com", password: "123", rol: "user" },
    { id: 2, title: "Juan", email: "juan@test.com", password: "123", rol: "user" },
    { id: 3, title: "Romina", email: "romina@test.com", password: "123", rol: "admin" },
    { id: 4, title: "Florencia", email: "romina@test.com", password: "123", rol: "admin" },
    { id: 5, title: "Laura", email: "romina@test.com", password: "123", rol: "admin" },
  ]

  return (
    <>
      <Formulario actualizar={setNombre} />
      {/* <Saludo nombre="Mariana" edad={32} email="mariana@test.com"/>
      <Saludo nombre="Diego" edad={32} email="diego@test.com"/> */}
      <Usuario isLoggedIn={nombre} nombre={nombre} />
      <Ingredientes products={usuarios} />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* <h1>Vite + React</h1> */}
      <h2>Primer Proyecto en React</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
