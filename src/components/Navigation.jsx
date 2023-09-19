import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      {/* <nav class="navbar navbar-light" style={{backgroundColor: "lightskyblue"}}>
  <div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="/noun_hamburger menu_547174.png" alt="" height="24" width="30" id="navimage"/>
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" id="navlink" to="/contact">
                  Contact
                </Link></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      
      </ul>
      <a class="navbar-brand" href="/"><strong>Judith Christine Mills</strong></a>

    
    </div>
  </div>
</nav> */}

<nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "lightskyblue"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><strong>Judith Christine Mills</strong></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="nav-link"  to="/blog">
                  Blog
                </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link"  to="/store">
                  Store
                </Link>
        </li>
        <li class="nav-item">
        <Link class="nav-link"  to="/contact">
                  Contact
                </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default withRouter(Navigation);