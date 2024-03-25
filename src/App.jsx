// eslint-disable-next-line no-unused-vars
import './App.css'
import { Header } from './components/Header.jsx'
import { List } from './components/List.jsx'
import { Search } from './components/Search.jsx'

function App() {

  return (
    <div className='p-2 bg-veryWhite'>
      <Header />
      <Search />
      <List />
    </div>
  )
}

export default App
