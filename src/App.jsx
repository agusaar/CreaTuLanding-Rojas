import './App.css'
import NavBar from './components/navBar/NavBar.jsx'
import ItemListContainer from './components/itemListContainer/ItemlistContainer.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer  />} />
        <Route path="/category/:cat" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
