import React from 'react';
import { Link } from 'react-router-dom';
import'./Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
        <h2><span className="text-style">Management</span></h2>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ml-auto ">

              <li class="nav-item mr-5">
                <Link class="nav-link " to="/home">Home</Link>
              </li>
              <li class="nav-item mr-5">
                <Link class="nav-link" to="/order">About</Link>
              </li>
              <li class="nav-item mr-5">
                <Link class="nav-link" to="/dashboard">DashBoard</Link>
              </li>
              <li class="nav-item mr-5">
                <Link class="nav-link" to="/login">Login</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;