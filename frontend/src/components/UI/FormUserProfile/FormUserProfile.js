import { RegisterStyle, ButtonStyle } from './../../Views/Register/RegisterStyle';
import { InputSection } from '../../Views/Login/LoginStyle';

const FormUserProfile = () => {
    return ( 
        <RegisterStyle> 
             <section className="row-form mt-5">
                    <h1
                        className={`text-black font-medium text-3xl mb-3 mt-12`}
                    >
                       Complete your profile
                    </h1>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="">Phone Number</label>
                    <input type="text" className="rounded" />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="">Image</label>
                    <input type="file" className="rounded" />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="">Address</label>
                    <input type="text" className="rounded" />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="">Zip code</label>
                    <input type="text" className="rounded" />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <label className="form-label mb-2" htmlFor="">City</label>
                    <input type="text" className="rounded" />
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <textarea id="story" name="story"
                    rows="5" cols="33">
                    Write something about you...
                    </textarea>
                </InputSection>
                <InputSection className="mb-3 flex flex-col">
                    <ButtonStyle>Submit</ButtonStyle>
                </InputSection>
             </section>
        </RegisterStyle>
     );
}
 
export default FormUserProfile;