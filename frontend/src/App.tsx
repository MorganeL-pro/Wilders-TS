import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import './App.scss';
import Wilders from './components/Wilders/Wilders';
import Form from './components/Form/Form';

function App(): JSX.Element {
  return (
      <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={ <Wilders/> } />
              <Route path="/add" element={ <Form />}/>
          </Routes>
      </div>
  );
}

export default App;
