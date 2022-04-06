import {
    FormAddPostStyle,
    InputSection
} from './../../Views/AddPost/AddPostStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { ButtonProfileStyle } from './FormPostStyle'

const FormPost = ({ handleSubmit, imageHandler, setContent, content, error }) => {
    
    return ( 
        <FormAddPostStyle onSubmit={handleSubmit}>
            <InputSection>
                <ButtonProfileStyle
                    type="submit"

                >
                    Submit
                </ButtonProfileStyle>
            </InputSection>
            <InputSection>
            
            <label className="custom-file-upload">
                <input
                    type="file"
                    onChange={(e) => imageHandler(e.target.files)}
                />
            </label>
            </InputSection>

            <InputSection>
                <input
                    type="text"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="input-create-post rounded"
                    placeholder="Write something about your life"
                />
                {error && <p className="error">{error}</p>}
            </InputSection>
    </FormAddPostStyle>
     );
}
 
export default FormPost;