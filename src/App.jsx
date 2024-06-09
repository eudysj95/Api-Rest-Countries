// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { Header } from './components/Header.jsx'
import { List } from './components/List.jsx'
import { Search } from './components/Search.jsx'

function App() {

  const [listado, setListado] = useState([]);

  return (
    <div id='appG' className='bg-veryWhite p-2'>
      <Header />
      <Search listado={listado} setListado={setListado} />
      <List listado={listado} setListado={setListado}/>
    </div>
  )
}

export default App
