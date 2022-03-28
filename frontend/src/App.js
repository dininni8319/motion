import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Navbar from './components/UI/Navbar/Navbar';
import { ConfigContext } from './components/Context/Config/index'

const App = () => {
    const [posts, setPosts] = useState([]);
    
    const { url } = useContext(ConfigContext)
    
    console.log(url);
    console.log(posts, 'testing the posts');
    useEffect(() => {
        fetch('http://localhost:8000/api/users/posts')
            .then((resp) => resp.json())
            .then((data) => setPosts(data.posts));
    }, []);

    return (
        <>
            <Navbar />
            <section className="App d-flex flex-column align-items-center justify-content-center min-vh-100">
                <h1 className="text-3xl font-bold underline bg-purple-100">
                    All Post
                </h1>
                {posts &&
                    posts.map((el) => {
                        return (
                            <section key={el.id}>
                                <h3>{el.name}</h3>
                                <p>{el.content}</p>
                                <img src={`http://localhost:8000/${el.img}`} alt={el.content} width='100px' height="100px"/>
                            </section>
                        );
                    })}
                <Link to="/add-post">Add a post</Link>
            </section>
        </>
    );
};

export default App;
