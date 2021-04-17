import React, { createContext, useState } from 'react';
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
import Login from './Components/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import OrderList from './Components/OrderList/OrderList';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="container">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
            <PrivateRoute path="/event/:id">
              <Event></Event>
            </PrivateRoute>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/order">
              <OrderList></OrderList>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
