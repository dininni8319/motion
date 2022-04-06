import { Link } from 'react-router-dom';
import { NavbarStyle } from './NavbarStyle.js';
import { useContext } from 'react';
import { AuthContext } from './../../Context/Auth/index';
import { PostsContext } from './../../Context/PostsContext/index';
import { sliceLetter } from './../../utilities/functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const { getUsersProfile } = useContext(PostsContext);
    let userProfile = getUsersProfile?.filter(el => el.id === user.id)[0]
    // console.log(user, 'testing the profile');

    return (
        <NavbarStyle>
            <li>
                <Link to="/">Motion</Link>
            </li>
            <li>{user === null && <Link to="/login">Login</Link>}</li>
            <li>{user === null && <Link to="/register">Register</Link>}</li>
            <li>{
                user && <Link to={`/users-detail-page/${user.id}`}>
                    {
                        userProfile?.img !== null ? <img
                                      src={`http://localhost:8000/${userProfile?.img}`}
                                      alt={user.first_name}
                                      className='shadow nav-img'

                                   /> : <FontAwesomeIcon
                                   icon={faUser}
                                   className={`fa-1x mx-1`}
                               />
                    }
                </Link> 
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
