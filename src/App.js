import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
// import { Button } from 'antd';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (

    <div>
      <Nav />

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      


    </div>
    
  );
}

export default App;



//<div className="App">
    
  //  <header className="App-header">
    //  <img src={logo} className="App-logo" alt="logo" />
      //<p>
        //Edit <code>src/App.js</code> and save to reload.
      //</p>
      //<a
        //className="App-link"
        //href="https://reactjs.org"
        //target="_blank"
        //rel="noopener noreferrer"
      //>
        //Learn React
      //</a>
    //</header>
  //</div>