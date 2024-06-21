import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/IslandIcon.png'
import './NavBar.css'

const Navbar = () => {
  return (
        <nav className="navbar">
            <Link to="/" className='navbar-img'>
                <img src={Logo} className="ps-5 pt-0 " style={{width: 200}} alt="Logo"/>
            </Link>
            <div className="pt-0">                
                <ul className="navbar-nav ps-4">             
                        <li className="nav-item">
                            <Link className="nav-link pe-5" to="/bugs">Bugs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5" to="/fish">Fish</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5" to="/sea-creatures">Sea Creatures</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link pe-5 disabled" to="/fossils">Fossils</Link>
                        </li>
                    
                    </ul>

            </div>
        </nav>

  );
};

export default Navbar;