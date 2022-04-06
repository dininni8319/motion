import { InputSection } from '../../../Views/Login/LoginStyle';
import { RegisterStyle, ButtonStyle } from './../../../Views/Register/RegisterStyle';
const FormProfile = ({ handleSubmit, phone, error, imageHandler, address, zipCode, city, description}) => {
    return ( 
        <RegisterStyle onSubmit={handleSubmit}> 
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
     );
}
 
export default FormProfile;