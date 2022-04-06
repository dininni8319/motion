import { ProfileStyle, ProfileDetail } from './ProfileStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCity, faLocationDot, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { PostsContext } from '../../Context/PostsContext';

const ProfileComponent = ({ slug }) => {

    const { getUsersProfile } = useContext(PostsContext);
    let userProfile = getUsersProfile?.filter(el => el.id === Number(slug))[0]
    let profile = userProfile?.city && getUsersProfile?.phone_number && getUsersProfile?.address && getUsersProfile?.zip_code && getUsersProfile?.description

    return ( 
        <>
            {
                userProfile  && <ProfileStyle className="">
                    <ProfileDetail>
                        <section className='profile-detail-img-section'>
                            <h2 className="my-5">Title:{userProfile.first_name} {userProfile.last_name}</h2>
                        </section>
            
                        <ul className='profile-detail-section mt-5'>
                            <li> <FontAwesomeIcon
                            icon={faEnvelope}
                            className={`fa-1x mx-1 icon-custom-style`}         
                        />: {userProfile.email}</li>
                            {
                                profile !== undefined || profile !== null && <>
                                        <li><FontAwesomeIcon
                                            icon={faCity}
                                            className={`fa-1x mx-1 icon-custom-style`}         
                                        />: {userProfile.city}</li>
                                        <li><FontAwesomeIcon
                                            icon={faLocationDot}
                                            className={`fa-1x mx-1 icon-custom-style`}         
                                        />: {userProfile.phone_number}</li>
                                            <li><FontAwesomeIcon
                                            icon={faEnvelope}
                                            className={`fa-1x mx-1 icon-custom-style`}         
                                        />: {userProfile.zip_code}</li>
                                        <li><FontAwesomeIcon
                                            icon={faAddressBook}
                                            className={`fa-1x mx-1 icon-custom-style`}         
                                        />: {userProfile.address}</li>
                                        <p className='mt-3'>Description:{userProfile.description}</p>
                                   </> 
                                 }
                        </ul>
                    </ProfileDetail>
                </ProfileStyle>

            }
             
        </>
    )   
    
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