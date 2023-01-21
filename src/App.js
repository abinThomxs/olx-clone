import React, {useEffect, useContext} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import './App.css';
import {AuthContext} from './store/Context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const user = useContext(AuthContext);
  useEffect(() => {
    console.log(user);
  })
  return (
    <div>
      <Router>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>   
        <Route path='/login'>
          <Login />
        </Route>     
      </Router>
      
    </div>
  );
}

export default App;
