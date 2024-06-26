import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../public/assets/ACNHLeaf.png'
import './NavBar.css'
import { Divider } from '@mui/material';

const Navbar = () => {
  return (
        <nav className="navbar">
            <Link to="/" className='navbar-img d-flex' style={{textDecoration: 'none'}}>
                <img src={Logo} className="ps-1 pt-0 " style={{width:60, height:60}} alt="Logo"/>
                <h1 className='narbar-imgText nav-item pt-4' >ACNH: Pocked Guide</h1>
            <Divider />
            </Link>
            <div className="pt-0">                
                <ul className="navbar-nav ps-3">   
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5" to="/">Dashboard</Link>
                        </li>  
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5" to="/bugs">Bugs</Link>
                        </li>
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5" to="/fish">Fish</Link>
                        </li>
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5" to="/sea-creatures">Sea Creatures</Link>
                        </li>
                        <li className="nav-item pb-2">
                            <Link className="nav-link ps-3 pe-5 " to="/fossils">Fossils</Link>
                        </li>

                    
                    </ul>

            </div>
        </nav>

  );
};

export default Navbar;