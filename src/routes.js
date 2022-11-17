import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router';
import { Login } from './views/Login';
import { Manager } from './views/Manager';

export const Routing = () => {

  return (
    <div className="landing-page">
      <Router>
        <Routes>
          <Route path='/' exact> </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/"> 
            <Navigate to="/login" />
            </Route>
          <Route path='/manager' component={ Manager }> </Route>
        </Routes>
      </Router>
    </div>
  );

};