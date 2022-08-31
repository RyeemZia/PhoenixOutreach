import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import logo from '../phoenix_logo.jpg';
// Here, we display our Navbar
import "./styles.css";
export default function Navbar() {
 return (
   <div>
     <body class="bg-light">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<nav class="navbar navbar-expand-lg navbar-dark bg-danger shadow">
    <div class="container">
      <a class="navbar-brand" href="#">
        <h4>Phoenix Outreach</h4>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav me-auto">
          <a class="nav-link active border-bottom" aria-current="page" href="#">Home</a>
          <a class="nav-link" aria-current="page" href="#">Works</a>
        </div>
        
      </div>
    </div>
  </nav>
<router-outlet></router-outlet>
</body>
   </div>
 );
}