import { Link } from 'react-router-dom';
import  { NavbarStyle } from './NavbarStyle.js';

const Navbar = () => {
    return (
        <nav >
            <NavbarStyle>
                <li>
                    <Link to="/">Motion</Link>
                </li>
                
                <li>
                    <Link to="/">Find Friends</Link>
                </li>
                <li>
                    <Link to="/add-post">Create a Post!</Link>
                </li>
                <li>
                    <Link to="/sign">Sign In</Link>
                </li>
            </NavbarStyle>
        </nav>
    );
};

export default Navbar;