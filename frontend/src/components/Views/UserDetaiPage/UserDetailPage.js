import { useParams } from 'react-router';

const UserDetailPage = () => {
    let { slug } = useParams()
    console.log(slug, 'slug');
    return ( <h1>UserDetailPage</h1> );
}
 
export default UserDetailPage;