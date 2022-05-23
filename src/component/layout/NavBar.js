import React from "react";
import { Link } from "react-router-dom";
import {isMobile} from 'react-device-detect';

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand text-white text-lg brand-text" to="/" style={{fontSize:isMobile?"26px":"2rem"}}>
              MovieSeriesInfo
            </Link>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block" style={{width:isMobile?"30px":"70px"}}>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-5x" id="imdb-logo" style={{fontSize:isMobile?"3em":"5em"}}/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
