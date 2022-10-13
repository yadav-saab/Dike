
import React from 'react';
import PropTypes from 'prop-types'
// import { NavLink } from 'react-router-dom'
export default function Navbar(prop) {

	
  return (
	<nav className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}>
	<div className="container-fluid">
	  <a className="navbar-brand" href="#">{prop.title}</a>
	  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	  </button>
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		  <li className="nav-item">
			<a className="nav-link active" aria-current="page" href="#">Home</a>
		  </li>
		  {/* <li className="nav-item">
			<NavLink className="nav-link" to="/about" >{prop.aboutText}</NavLink>
		  </li> */}
		</ul>
		
		<form className="d-flex">
		  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
		  <button className="btn btn-outline-success" type="submit">Search</button>
		</form>
		<div className={`form-check form-switch text-${prop.mode==='light'?'dark':'light'} mx-2`}>
		<input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={prop.toggleMode} />
		<label className="form-check-label" htmlFor="flexSwitchCheckDefault">{prop.mode==='dark'?'Disable':'Enable'} Dark Mode</label>
		</div>
	  </div>
	</div>
  </nav>
  )
}

Navbar.propTypes = {
	title:PropTypes.string.isRequired,
	aboutText:PropTypes.string.isRequired
}

Navbar.defaultProps = {
	title:"Not set yet",
	aboutText:"About"
}