import React from 'react'
import Page from "./Components/Webpage"
// import Login from './Components/Login'
// import SignUp from './Components/Signup'
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Page/>} />
      {/* <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>} /> */}
    </Routes>
    </>
  )
}

export default App
