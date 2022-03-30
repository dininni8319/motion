import { useState, useEffect, useContext, createContext } from 'react';
import { ConfigContext } from './../Config/index';
import { AuthContext } from './../Auth/index';

export const PostsContext = createContext();

export function PostsProvider(props) {

    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);
    const { url } = useContext(ConfigContext);
    
    useEffect(() => {
        fetch('http://localhost:8000/api/users/posts', {
            headers: {
                Authorization: `Bearer ${user?.token}`
            }
        })
            .then((resp) => resp.json())
            .then((data) => setPosts(data.posts))
            .catch((e) => console.log(e));
    }, []);

    return (
        <PostsContext.Provider value={{ posts }}>
            {props.children}
        </PostsContext.Provider>
    );
}
