import { SideBarStyle } from './SideBarStyle';
import { Link } from 'react-router-dom';
const SideBar = ({ allUsers }) => {

    return (

        <SideBarStyle>
            {
                allUsers?.map( el => {
                   return (
                        <section className='d-flex flex-column' key={el.id}>
                            <Link to={`/users-detail-page/${el.id}`}>
                                <span className='p-2 font-thin'>{el.first_name}</span>
                            </Link>
                        </section>
                   ) 
                })
            }
        </SideBarStyle>
    )
};

export default SideBar;
