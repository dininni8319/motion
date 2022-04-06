import { useState, useRef, useContext, useEffect } from 'react';
import { FormUserProfileStyle } from './FormUserProfileStyle';
import { useNavigate } from 'react-router';
import { AuthContext } from './../../Context/Auth/index';
import { ProfileComponent } from '../index';
import FormProfile from './FormProfile/FormProfile';
import axios from 'axios';

const FormUserProfile = ({ slug }) => {
    let { user } = useContext(AuthContext)
    const [image, setImage] = useState([]);
    const [error, setError] = useState(false);

    let phone = useRef(0)
    let address = useRef('')
    let zipCode = useRef(0)
    let description = useRef('')
    let city = useRef('')

    const navigate = useNavigate();

    const imageHandler = (file) => {
        setImage(file[0]);
    };
    
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formatData = new FormData();

        formatData.append('phone_number', phone.current?.value);
        formatData.append('address', address.current?.value);
        formatData.append('city', city.current?.value);
        formatData.append('description', description.current?.value);
        formatData.append('zip_code', zipCode.current?.value);
        formatData.append('img', image);

        axios
            .post('http://localhost:8000/api/users/complete-profile', formatData, config)
            .then((resp) => {
                if (resp.status === 200) {
                    alert('Your message is been delivered');
                    navigate('/') 
                }
            })
            .catch((e) => console.log(e));
    }
    return ( 
        <FormUserProfileStyle>   
            <ProfileComponent  
                slug={slug}
            />
            <FormProfile 
                handleSubmit={handleSubmit}
                imageHandler={imageHandler}
                city={city}
                address={address}
                phone={phone}
                zipCode={zipCode}
                error={error}
            />
        </FormUserProfileStyle>    
     );
}
 
export default FormUserProfile;