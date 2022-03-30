import { SideBarStyle } from './SideBarStyle';
import { Link } from 'react-router-dom';
import { SectionUserProfile } from './SideBarStyle';

const SideBar = ({ allUsers }) => {
    let innerWidth = window.innerWidth;
    console.log(innerWidth, 'testiamo');

    if (innerWidth < 700) {
        allUsers?.slice(0, 8);
    }
    const sliceLetter = (str) => {
        return str.split('').slice(0, 1);
    };
    return (
        <SideBarStyle>
            {allUsers?.slice(0, 8).map((el) => {
                return (
                    <SectionUserProfile key={el.id}>
                        <Link to={`/users-detail-page/${el.id}`}>
                            <span className="p-2 font-thin uppercase user-profile-initials">
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
