import React from "react";
import "./App.css";
import Home from "./components/Home";
import Greeting from './components/Greeting'
import { Routes, Route } from 'react-router-dom';
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fillform' element={<Form />} />
        <Route path='/geterate' element={<Greeting />} />
      </Routes>
    </>
  )
}

export default App;