import { Link } from 'react-router-dom';
import { CardStyle, SectionPosts } from './CardStyle';
import FormComment from './../FormComment/FormComment';

const Card = ({ posts }) => {
    
    const formatDate = (date) => {
        let time = new Date(date);
        let timeNow = new Date().getDay();

        let day = time.getDay();
        let hours = time.getHours();

        let minutes = time.getMinutes();
        return ` ${day === timeNow ? 'Today' : 'Yesterday'} ${
            hours < 10 ? '0' + hours : hours
        }:${minutes < 10 ? '0' + minutes : minutes}`;
    };

    return (
        <CardStyle className="App d-flex flex-column align-items-center justify-content-center min-vh-100">
            {posts &&
                [...posts].reverse().map((el) => {
                    return (
                        <>
                            <SectionPosts key={el.id}>
                                <span className="text-sm">
                                    {formatDate(el.created_at)}
                                </span>
                                <strong className='px-3 py-2'>{el.name}</strong>
                                <img
                                    src={`http://localhost:8000/${el.img}`}
                                    alt={el.content}
                                />
                                <p className="text-sm py-2">{el.content}</p>
                            </SectionPosts>
                            <SectionPosts>
                                <FormComment id={el.id} />
                            </SectionPosts>
                        </>
                    );
                })}
        </CardStyle>
    );
};

export default Card;
