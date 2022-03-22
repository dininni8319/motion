import { Link } from 'react-router-dom';
import { NavbarStyle } from './NavbarStyle.js';
import { useContext } from 'react';
import { AuthContext } from './../../Context/Auth/index';

const Navbar = () => {

    const { logout } = useContext(AuthContext)
    console.log(logout);

    return (
        <nav>
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
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            </NavbarStyle>
        </nav>
    );
};

export default Navbar;
