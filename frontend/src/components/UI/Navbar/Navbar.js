import { Link } from 'react-router-dom';
import { NavbarStyle } from './NavbarStyle.js';
import { useContext } from 'react';
import { AuthContext } from './../../Context/Auth/index';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
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
                <li>{user === null && <Link to="/login">Login</Link>}</li>
                <li>{user === null && <Link to="/register">Register</Link>}</li>
                <li>
                    {user !== null && <button onClick={logout}>Logout</button>}
                </li>
            </NavbarStyle>
    );
};

export default Navbar;
