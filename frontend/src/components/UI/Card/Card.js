import { Link } from 'react-router-dom';
import { CardStyle, SectionPosts } from './CardStyle';

const Card = ({ posts }) => {
    
    const formatDate = (date) => {
        let time = new Date(date)
        let timeNow = new Date()
        let day = time.getDay()
        let hours = time.getHours()
    
        let minutes = time.getMinutes()

        // let diff = Math.round((timeNow.getTime() - time.getTime()) / 3600000);
    
        return ` ${day === 1 ? "Today" : day || day === 2 ? "Yesterday" : day} ${ hours < 10 ? '0' + hours : hours}:${ minutes < 10 ? '0' + minutes : minutes}`
    }
    return (
        <CardStyle className="App d-flex flex-column align-items-center justify-content-center min-vh-100">
    
                {posts &&
                    posts.map((el) => {
                        return (
                            <SectionPosts key={el.id}>
                                <span className='text-sm'>{formatDate(el.created_at)}</span>
                                <img src={`http://localhost:8000/${el.img}`} alt={el.content} />
                                <p className='text-sm py-2'>{el.content}</p>
                            </SectionPosts>
                        );
                    })}
                <Link to="/add-post">Add a post</Link>
            </CardStyle>
    )
}

export default Card;