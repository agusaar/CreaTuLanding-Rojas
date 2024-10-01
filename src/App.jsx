import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import ItemListContainer from './components/itemListContainer/ItemlistContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer text="BeFree. Ponete lo que quieras." />      
    </>
  )
}

export default App
