import { SideBarStyle } from './SideBarStyle';
import { Link } from 'react-router-dom';
import { SectionUserProfile } from './SideBarStyle';
import { sliceLetter } from './../../utilities/functions';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Auth/index'

const SideBar = ({ allUsers }) => {
    let innerWidth = window.innerWidth;

    let { user } = useContext(AuthContext);
    if (innerWidth < 700) {
        allUsers?.slice(0, 8);
    }

    return (
        <SideBarStyle>
            {allUsers && allUsers.filter(el => el.id !== user.id ).map((el) => {
                return (
                    <SectionUserProfile key={el.id}>
                        <Link to={`/users-detail-page/${el.id}`}>
                            <span className="p-2 font-thin text-sm uppercase user-profile-initials">
                                {sliceLetter(el.first_name)}
                                {sliceLetter(el.last_name)}
                            </span>
                        </Link>
                    </SectionUserProfile>
                );
            })}
        </SideBarStyle>
    );
};

export default SideBar;
