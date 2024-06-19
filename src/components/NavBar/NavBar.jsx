import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/IslandIcon.png'
import './NavBar.css'

const Navbar = () => {
  return (
        <nav className="navbar ">
            <div className="container-fluid w-100 ps-5 pt-0 d-flex align-items-center">
                <a className="navbar-brand" href="/">
                <img src={Logo} alt="Logo" width="100" height="100" class="d-inline-block align-text-top"/>
                </a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                        <li className="nav-item">
                            <Link className="nav-link pe-4" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-4" to="/bugs">Bugs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-4" to="/fish">Fish</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-4 " to="/sea-creatures">Sea Creatures</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-4 disabled" aria-disabled="true" to="/fossils">Fossils</Link>
                        </li>
                    
                    </ul>

            </div>
        </nav>

  );
};

export default Navbar;