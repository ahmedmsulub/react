import React from 'react';
// import './App.css';
import {Link} from 'react-router-dom'
function Nav() {
    const navStyle = {
        color:'blue'
    }
  return (
      <React.Fragment>
          <div className="sideBar">
        <nav>
            <ul className="nav-links">
            <Link style={navStyle} to='LoginScreen'><li className="li-decoration">LoginScreen</li></Link>
            <Link style={navStyle} to='/Dashboard'><li  className="li-decoration">Dashboard</li></Link>
            <Link style={navStyle} to='UserScreen'><li  className="li-decoration">UserScreen</li></Link>
            </ul>
        </nav>
    </div>
      </React.Fragment>
    
  );
}

export default Nav;
