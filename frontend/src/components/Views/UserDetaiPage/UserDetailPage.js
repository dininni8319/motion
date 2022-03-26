import { useParams } from 'react-router';

const UserDetailPage = () => {
    let { slug } = useParams()
   
    return ( <h1>UserDetailPage</h1> );
}
 
export default UserDetailPage;