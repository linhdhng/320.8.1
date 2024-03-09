
import './App.css'
import NavCard from './component/NavCard'
import Currencies from './nav/Card'
import Price from './nav/Content'

import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <NavCard />
      <Routes>
        <Route path='/' element={<Currencies />}/>
        <Route path='/price/:symbol' element={<Price />}/>
      </Routes>
    </>
  )
}

export default App
