import { CardStyle, SectionPosts } from './CardStyle';
import FormComment from './../FormComment/FormComment';
import { useContext, useEffect, useState } from 'react';
import { ConfigContext } from '../../Context/Config';
import { AuthContext } from '../../Context/Auth';
import { formatDate } from './../../utilities/functions';

const Card = ({ posts }) => {

    const [ comments, setComments ] = useState(null);
    const [ commentsSpecificCard, setCommentsSpecificCard] = useState(null)
    const [ showComments, setShowComments ] = useState(false);
    const { url } = useContext(ConfigContext)
    const { user } = useContext(AuthContext)
    
    useEffect(() => {
        fetch(`${url.backend}/api/users/get-comments`, {
            headers: { Authorization: `Bearer ${user?.token}` }
        })
            .then(resp => resp.json())
            .then(data => setComments(data.comments))
    }, [])
    
    const handleShowComments = (id) => {

        let unique = posts.some(el => {
            if (id === el.id)  return true
        })
        if (unique) {
            setCommentsSpecificCard(id)
            setShowComments(true);
        }
    }

    return (
        <CardStyle className="App d-flex flex-column align-items-center justify-content-center min-vh-100">
            {posts &&
                [...posts].reverse().map((el) => {
                    return (
                        <SectionPosts>
                            <section key={el.id}>
                                <section className='flex flex-col'>
                                    <section className='flex items-center justify-between card-header-custom'>
                                        <span className="text-sm">
                                            {formatDate(el.created_at)}
                                        </span>
                                        <span className='text-base fw-bold capitalize'>{el.name}</span>
                                    </section>
                                    <section>
                                        <p className="text-sm py-1 capitalize">{el.content}</p>
                                    </section>
                                </section>
                                    <img
                                        src={`http://localhost:8000/${el.img}`}
                                        alt={el.content}
                                        />
                                    <FormComment id={el.id} />
                                    <section className='section-comments' onClick={() => handleShowComments(el.id)}>
                                    
                                        {
                                            showComments && commentsSpecificCard === el.id  ? comments?.map(element => {
                                                return (
                                                    <section key={element.id} className='my-3 mx-2 drop-shadow-md'>
                                                        {
                                                            el.id === element.post_id && <span className='comment-custom-style py-2 rounded text-sm'>{element.comment}</span>
                                                        } 
                                                    </section>
        
                                                ) 
                                            }) : <span className='text-sm p-2'>...check the comments</span>
                                        }

                                    </section>
                            </section>
                              
                        </SectionPosts>
                    );
                })}
        </CardStyle>
    );
};

export default Card;
