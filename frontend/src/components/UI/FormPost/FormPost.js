import {
    FormAddPostStyle,
    ButtonAddPostStyle,
    InputSection
} from './../../Views/AddPost/AddPostStyle';

const FormPost = ({ handleSubmit, imageHandler, setContent, content, error }) => {
    return ( 
        <FormAddPostStyle onSubmit={handleSubmit}>
            <InputSection>
                <ButtonAddPostStyle
                    type="submit"
                    className="btn-create-post"
                >
                    Submit
                </ButtonAddPostStyle>
            </InputSection>
            <InputSection>
                <input
                    type="file"
                    onChange={(e) => imageHandler(e.target.files)}
                />
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