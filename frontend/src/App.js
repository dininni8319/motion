import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/users/posts')
            .then((resp) => resp.json())
            .then((data) => setPosts(data.posts));
    }, []);

    return (
        <>
            <section className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                <h1 className="text-3xl font-bold underline bg-purple-100">
                    All Post
                </h1>
                {posts &&
                    posts.map((el) => {
                        return (
                            <section key={el.id}>
                                <h3>{el.name}</h3>
                                <p>{el.content}</p>
                            </section>
                        );
                    })}
                <Link to="/add-post">Add a post</Link>
            </section>
        </>
    );
};

export default App;
