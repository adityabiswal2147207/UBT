import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';




function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/signin' element = {<Signin />} />
        <Route path = '/signup' element = {<Signup />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
