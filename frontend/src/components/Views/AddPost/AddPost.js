import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import Navbar from '../../UI/Navbar/Navbar';
import SideBar from '../../UI/SideBar/SideBar';
import { AuthContext } from './../../Context/Auth/index'
import { AddPostStyle, FormAddPostStyle } from './AddPostStyle';
import { ButtonStyle } from '../Register/RegisterStyle';
import axios from 'axios';

const AddPost = () => {
    const { user } = useContext(AuthContext)
    const token = user.token

    const navigate = useNavigate();
    const [ content, setContent ] = useState('');

    const [ image, setImage ] = useState([])
    const [ allUsers, setAllUsers ] = useState([])


    const imageHandler = (file) => {
        setImage(file[0])
    }

    useEffect(() => {
        fetch('http://localhost:8000/api/users/get-all-users')
         .then(resp => resp.json())
         .then(data => setAllUsers(data.data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const formatData = new FormData()
        formatData.append('img', image)
        formatData.append('content', content)
        
        axios.post('http://localhost:8000/api/users/add-post', formatData)
        .then(resp => console.log(resp, 'testing the resp'))
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
                      onChange={(e) => imageHandler(e.target.files)}
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
