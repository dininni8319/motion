import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../UI/Navbar/Navbar';
import SideBar from '../../UI/SideBar/SideBar';
import { AddPostStyle, FormAddPostStyle } from './AddPostStyle';
import { ButtonStyle } from '../Register/RegisterStyle';

const AddPost = () => {
    const navigate = useNavigate();
    const [content, setContent] = useState('');
    const [ image, setImage ] = useState([])
    const [ allUsers, setAllUsers ] = useState([])
    
    console.log(image, 'testing the image');
    const imageHandler = (file) => {
        setImage(file)
    }
    useEffect(() => {
        fetch('http://localhost:8000/api/users/get-all-users')
         .then(resp => resp.json())
         .then(data => setAllUsers(data.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
 

        fetch('http://localhost:8000/api/users/add-post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                content: content,
                path: image
            })
        }).then((resp) => {
            if (resp.ok) {
                alert('Your data has been posted!');
                navigate('/');
            } else {
                alert('Oppsss...');
            }
        });
    };

    return (
        <AddPostStyle>
            <Navbar />
            <SideBar 
                allUsers={allUsers}
            />

            <FormAddPostStyle onSubmit={handleSubmit}>
                <section className="d-flex flex-column">
                    <ButtonStyle type="submit" className="btn-create-post">
                        Submit
                    </ButtonStyle>
                    {/* <Link to="/">Go back!</Link> */}
                </section>
                <section className=" d-flex flex-column">
                    <label htmlFor="">Image</label>
                    <input 
                      type="file"
                    //   value={image} 
                      onChange={(e) => imageHandler(e.target.value)}
                    />
                </section>
                <section className="d-flex flex-column">
                    <input
                        type="text"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className="input-create-post"
                        placeholder="Write something about your life"
                    />
                </section>
            </FormAddPostStyle>
        </AddPostStyle>
    );
};

export default AddPost;
