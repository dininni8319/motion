import { useState, useEffect, useContext, createContext } from 'react'
import { ConfigContext } from './../Config/index'

export const PostsContext = createContext();

export function PostsProvider(props) {
    
    const [posts, setPosts] = useState([]);
    
    const { url } = useContext(ConfigContext)

    useEffect(() => {
        fetch('http://localhost:8000/api/users/posts')
            .then((resp) => resp.json())
            .then((data) => setPosts(data.posts));
    }, []);
    
    return (
        <PostsContext.Provider value={{ posts }}>
            {props.children}
        </PostsContext.Provider>
    );

}

