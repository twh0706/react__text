import React from 'react';
import './App.css';
import Head from './compontent/Head'
import Home from './views/Home';
import My from './views/My';
import {Redirect,HashRouter,Route,Switch} from 'react-router-dom'
// import Foot from './compontent/Foot';
import Detile from './views/Detile';
import Sou from './views/Sou';
function App() {
  return (
    <>
      <HashRouter>
          <Switch>
            <Route path='/home' component={Home}></Route>
            <Route path='/detile/:id' component={Detile}></Route>
            <Route path='/sou' component={Sou}></Route>
            <Redirect to='/home'></Redirect>
          </Switch>
      </HashRouter>
      {/* <Foot/> */}
    </>
  );
}

export default App;
