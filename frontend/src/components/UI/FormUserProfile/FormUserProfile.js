import { RegisterStyle, ButtonStyle } from './../../Views/Register/RegisterStyle';
import { InputSection } from '../../Views/Login/LoginStyle';
import { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from './../../Context/Auth/index';
import { ProfileComponent } from '../index';
import axios from 'axios';

const FormUserProfile = ({ slug }) => {

    let phone = useRef(0)
    let address = useRef('')
    let zipCode = useRef(0)
    let description = useRef('')
    let city = useRef('')

    let { user } = useContext(AuthContext)
    const [image, setImage] = useState([]);
    const [error, setError] = useState(false);
    const [ userProfile, setUserProfile ] = useState([]);
    
    const profile = userProfile.address && userProfile.phone && userProfile.description && userProfile.zip_code
    let profileId = Number(slug) === user.id
    console.log(profile, 'testing the profile');
    const navigate = useNavigate();
    
    const enteredNumber = phone.current?.value;
    const enteredAddress = address.current?.value;
    const enteredCity = city.current?.value;
    const enteredDescription = description.current?.value;
    const enteredZipCode = zipCode.current?.value;

    const imageHandler = (file) => {
        setImage(file[0]);
    };
    
    const config = {
        headers: { Authorization: `Bearer ${user.token}` }
    };

    useEffect(() => {
        axios
                .get('http://localhost:8000/api/users/view-profile', config)
                .then((resp) => {
                        setUserProfile(resp.data.data);
                    
                })
                .catch((e) => console.log(e));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formatData = new FormData();

        formatData.append('phone_number', enteredNumber);
        formatData.append('address', enteredAddress);
        formatData.append('zip_code', enteredZipCode);
        formatData.append('description', enteredDescription);
        formatData.append('city', enteredCity);
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
        <>   
            <ProfileComponent userProfile={userProfile}/>
          {
            profileId && profile === null && <RegisterStyle onSubmit={handleSubmit}> 
                <section className="row-form mt-5">
                        <h1
                            className={`text-black font-medium text-3xl mb-3 mt-12`}
                        >
                            Complete your profile
                        </h1>
                    <InputSection className="mb-3 flex flex-col">
                        <label className="form-label mb-2" htmlFor="">Phone Number</label>
                        <input type="tel" id="phone" name="phone" 
                            ref={phone}
                        //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            className="rounded"
                            required
                        />

                        {
                            error && <span className="error">Please fill the required fild</span>
                        }
                    </InputSection>
                    <InputSection className="mb-3 flex flex-col">
                        <label className="form-label mb-2" htmlFor="">Image</label>
                        <input 
                            type="file" 
                            className="rounded"
                            onChange={(e) => imageHandler(e.target.files)} 
                        />
                    </InputSection>
                    <InputSection className="mb-3 flex flex-col">
                        <label className="form-label mb-2" htmlFor="">Address</label>
                        <input type="text" className="rounded" 
                            ref={address}
                        />
                    </InputSection>
                    <InputSection className="mb-3 flex flex-col">
                        <label className="form-label mb-2" htmlFor="">Zip code</label>
                        <input type="number" 
                            className="rounded" 
                            ref={zipCode}
                        />
                    </InputSection>
                    <InputSection className="mb-3 flex flex-col">
                        <label className="form-label mb-2" htmlFor="">City</label>
                        <input 
                            type="text" 
                            className="rounded" 
                            ref={city}
                        />
                    </InputSection>
                    <InputSection className="mb-3 flex flex-col">
                        <textarea id="story" name="story" ref={description}
                            rows="5" cols="33">
                            Write something about you...
                        </textarea>
                    </InputSection>
                    <InputSection className="mb-3 flex flex-col">
                        <ButtonStyle type='submit'>Submit</ButtonStyle>
                    </InputSection>
                </section>
            </RegisterStyle> 
           }
        </>    
     );
}
 
export default FormUserProfile;