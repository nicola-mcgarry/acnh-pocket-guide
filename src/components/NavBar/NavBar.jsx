import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/ACNHLeaf.png'
import './NavBar.css'
import { Divider } from '@mui/material';

const Navbar = () => {
  return (
        <nav className="navbar">
            <Link to="/" className='navbar-img d-flex flex-column justify-content-center ms-4' style={{textDecoration: 'none'}}>
                <img src={Logo} className="ms-5 pt-0 " style={{width:60, height:60}} alt="Logo"/>
                <h1 className='narbar-imgText nav-item pt-2' >ACNH: Pocked Guide</h1>
            </Link>
            <div className="pt-0">                
                <ul className="navbar-nav ps-3 pt-5">   
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5 disabled" to="/">Dashboard</Link>
                        </li>  
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5" to="/bugs">Bugs</Link>
                        </li>
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5 disabled" to="/fish">Fish</Link>
                        </li>
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5 disabled" to="/sea-creatures">Sea Creatures</Link>
                        </li>
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5 disabled" to="/fossils">Fossils</Link>
                        </li>

                    
                    </ul>

            </div>
        </nav>

  );
};

export default Navbar;