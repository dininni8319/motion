import { ProfileStyle, ProfileDetail } from './ProfileStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCity, faLocationDot, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';
import { PostsContext } from '../../Context/PostsContext';

const ProfileComponent = ({  slug }) => {
  
    const { getUsersProfile } = useCallback(PostsContext);
    console.log(getUsersProfile);
    return ( 
        <>
            {    //userProfile.id === Number(slug) &&
                getUsersProfile?.filter(el => {
                  if (el.id === slug) {
                    <ProfileStyle className="">
                    <ProfileDetail>
                        <section className='profile-detail-img-section'>
                            <h2 className="my-5">Title:{el.first_name} {el.last_name}</h2>
                            <p className='mt-3'>Description:{el.description}</p>
                        </section>
            
                        <ul className='profile-detail-section mt-5'>
                            <li> <FontAwesomeIcon
                            icon={faEnvelope}
                            className={`fa-1x mx-1 icon-custom-style`}         
                        />: {el.email}</li>
                            <li><FontAwesomeIcon
                            icon={faCity}
                            className={`fa-1x mx-1 icon-custom-style`}         
                        />: {el.city}</li>
                            <li><FontAwesomeIcon
                            icon={faLocationDot}
                            className={`fa-1x mx-1 icon-custom-style`}         
                        />: {el.phone_number}</li>
                            <li><FontAwesomeIcon
                            icon={faEnvelope}
                            className={`fa-1x mx-1 icon-custom-style`}         
                        />: {el.zip_code}</li>
                        <li><FontAwesomeIcon
                            icon={faAddressBook}
                            className={`fa-1x mx-1 icon-custom-style`}         
                        />: {el.address}</li>
                        </ul>
                    </ProfileDetail>
                </ProfileStyle>
                  }  
                })   
            }
        </>
      
     );
}
 
export default ProfileComponent;


// address: "Neumünsterstrasse 26"
// city: "Zürich"
// created_at: "2022-04-03T06:42:03.000000Z"
// description: "Write something about you..."
// email: "s.dininni@yahoo.com"
// first_name: "Salvatore"
// id: 1
// img: "assets/img/1649151523.png"
// last_name: "Dininni"
// phone_number: "+41762160203"
// updated_at: "2022-04-05T09:38:43.000000Z"
// zip_code: "8008"