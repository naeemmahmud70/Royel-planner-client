import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Error from './Components/Home/Home/Error/Error';
import DashBoard from './Components/DashBoard/DashBoard';
import Review from './Components/DashBoard/Review/Review';
import AddServices from './Components/DashBoard/AddService/AddServices';
import Event from './Components/Home/Home/Event/Event';


function App() {
  return (
    <div className="container">
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/dashboard">
          <DashBoard></DashBoard>
        </Route>
        <Route path="/addService">
          <AddServices></AddServices>
        </Route>
        <Route path ="/event/:id">
          <Event></Event>
        </Route>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
         <Error></Error>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
