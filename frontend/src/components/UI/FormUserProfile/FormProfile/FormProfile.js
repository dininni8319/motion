import { useState } from 'react';
import { InputSection } from '../../../Views/Login/LoginStyle';
import { FormProfileStyle, ButtonProfileStyle } from './FormProfileStyle';

const FormProfile = ({ handleSubmit, phone, error, imageHandler, address, zipCode, city, description, authUser}) => {
    
    const [ completeProfile, setCompleteProfile ] = useState(false);
    
    const handleForm = (e) => {
        setCompleteProfile(!completeProfile)
    }

    return ( 
        <>
          {
            authUser && <button onClick={handleForm} className='px-3 bg-white w-full text-3xl py-4 border-gray-400 border-solid '>Complete or update your profile</button>

          }
          
            {
                completeProfile && authUser && <FormProfileStyle onSubmit={handleSubmit} > 
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
                                <div>
                                    <label className="custom-file-upload form-label mb-2">
                                        <input
                                            type="file"
                                            onChange={(e) => imageHandler(e.target.files)}
                                            required
                                        />
                                    </label>
                                </div>
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
                                <textarea id="story" ref={description}
                                    rows="5" cols="33" defaultValue="This is a description.">
                                </textarea>
                            </InputSection>
                            <InputSection className="mb-3 flex flex-col">
                                <ButtonProfileStyle type='submit'>Submit</ButtonProfileStyle>
                            </InputSection>
                        </section>
                    </FormProfileStyle> 
            }
        </>
        
     );
}
 
export default FormProfile;