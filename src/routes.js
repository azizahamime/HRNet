import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './style/App.css';
import CreateEmployee from './pages/createEmployee';
import ListEmployee from './pages/ListEmployee';
import Error from './pages/404';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<CreateEmployee />} />
        <Route exact path='/listEmployee' element={<ListEmployee />} />
        <Route path='/*' element={<Error />} />
      </Routes>

    </Router>
  );
}

export default App;
