import React from 'react';
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-sm bg-${props.cls} border-bottom navbar-${props.cls}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="/">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/"> Home </Link>
                {/* <a className="nav-link" aria-current="page" href="/"> Home </a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about"> About </Link>
                {/* <a className="nav-link" href="/about"> About </a> */}
              </li>
            </ul>
            <div className="d-flex">
              <div className="border border-dark bg-primary rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() => props.toggleMode('primary')}></div>
              <div className="border border-dark bg-danger rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() => props.toggleMode('danger')}></div>
              <div className="border border-dark bg-success rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() => props.toggleMode('success')}></div>
              <div className="border border-dark bg-warning rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() => props.toggleMode('warning')}></div>
              <div className="border border-dark bg-light rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() => props.toggleMode('light')}></div>
              <div className="border border-light bg-dark rounded mx-2" style={{height:'30px', width:'30px', cursor:'pointer'}} onClick={() => props.toggleMode('dark')}></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
