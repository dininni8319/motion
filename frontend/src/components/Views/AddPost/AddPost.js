import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../UI/Navbar/Navbar';
import SideBar from '../../UI/SideBar/SideBar';
import Card from '../../UI/Card/Card';
import { AuthContext } from './../../Context/Auth/index';
import { PostsContext } from './../../Context/PostsContext/index';
import {
    AddPostStyle,
    FormAddPostStyle,
    ButtonAddPostStyle,
    InputSection
} from './AddPostStyle';
import axios from 'axios';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const { posts } = useContext(PostsContext);
    const [error, setError] = useState(false);
    const token = user.token;

    const navigate = useNavigate();
    const [content, setContent] = useState('');

    const [image, setImage] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    const imageHandler = (file) => {
        setImage(file[0]);
    };

    useEffect(() => {
        fetch('http://localhost:8000/api/users/get-all-users')
            .then((resp) => resp.json())
            .then((data) => setAllUsers(data.data));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formatData = new FormData();

        if (content === '') {
            setError(true);
            
        } else {
            formatData.append('content', content);
            formatData.append('img', image);
        }

        const config = {
            headers: { Authorization: `Bearer ${user.token}` }
        };

        axios
            .post('http://localhost:8000/api/users/add-post', formatData, config)
            .then((resp) => {
                if (resp.status === 200) {
                    alert('Your message is been delivered');
                    navigate('/');
                }
            })
            .catch((e) => setError(e));
    };

    return (
        <AddPostStyle>
            <Navbar />
            <SideBar allUsers={allUsers} />

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
                        className="input-create-post"
                        placeholder="Write something about your life"
                    />
                    {error && <p className="error">{error}</p>}
                </InputSection>
            </FormAddPostStyle>
            <Card posts={posts} />
        </AddPostStyle>
    );
};

export default AddPost;
