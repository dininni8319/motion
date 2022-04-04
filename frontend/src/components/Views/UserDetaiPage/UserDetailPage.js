import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Navbar, FormUserProfile, Header, SideBar } from './../../UI/index';
import { UserProfileStyle } from './UserProfileStyle';

const UserDetailPage = () => {
    let { slug } = useParams();
    const [allUsers, setAllUsers] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:8000/api/users/get-all-users')
            .then((resp) => resp.json())
            .then((data) => setAllUsers(data.data));
    }, []);

    return (
        <UserProfileStyle>
            <Navbar /> 
            <SideBar allUsers={allUsers} />
            <Header />
            <FormUserProfile /> 
        </UserProfileStyle>
    )
};

export default UserDetailPage;
