import { Link } from 'react-router-dom';
import { NavbarStyle } from './NavbarStyle.js';
import { useContext } from 'react';
import { AuthContext } from './../../Context/Auth/index';
import { sliceLetter } from './../../utilities/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <NavbarStyle>
            <li>
                <Link to="/">Motion</Link>
            </li>
            <li>{user === null && <Link to="/login">Login</Link>}</li>
            <li>{user === null && <Link to="/register">Register</Link>}</li>
            <li>{
                user && <span className='capitalize font-light'>{user.first_name} {user.last_name}</span>
            }</li>
            <li>{user !== null && <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className={`fa-1x mx-1 icon-custom-style`}
                onClick={logout}
            />}</li>
            
        </NavbarStyle>
    );
};

export default Navbar;
