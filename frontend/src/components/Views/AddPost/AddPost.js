import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Card, SideBar, Navbar } from './../../UI/index';
import FormPost from './../../UI/FormPost/FormPost';
import { AuthContext } from './../../Context/Auth/index';
import { PostsContext } from './../../Context/PostsContext/index';
import {
    AddPostStyle,
} from './AddPostStyle';

import axios from 'axios';

const AddPost = () => {
    const { user } = useContext(AuthContext);
    const { posts, getUsersProfile } = useContext(PostsContext);
    
    const [error, setError] = useState(false);
    const [content, setContent] = useState('');
    const [image, setImage] = useState([]);

    const token = user.token;

    const navigate = useNavigate();

    const imageHandler = (file) => {
        setImage(file[0]);
    };

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
                    setContent('')
                }
            })
            .catch((e) => setError(e));
    };

    return (
        <AddPostStyle>
            <Navbar />
            <SideBar allUsers={getUsersProfile} />

            <FormPost 
              imageHandler={imageHandler}
              setContent={setContent}
              content={content}
              handleSubmit={handleSubmit}
            />
            <Card posts={posts} />
        </AddPostStyle>
    );
};

export default AddPost;
