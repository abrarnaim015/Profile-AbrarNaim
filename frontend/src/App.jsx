// import logo from './logo.svg';
// import './App.css';
// import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from './pages'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ HomePage }></Route>
      </Switch>
    </div>
  );
}

export default App;
