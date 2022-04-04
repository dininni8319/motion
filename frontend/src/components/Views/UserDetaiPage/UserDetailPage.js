import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Navbar, FormUserProfile, Header } from './../../UI/index';
import { UserProfileStyle } from './UserProfileStyle';

const UserDetailPage = () => {
    let { slug } = useParams();

    return (
        <UserProfileStyle>
            <Navbar /> 
            <Header />
            <FormUserProfile /> 
        </UserProfileStyle>
    )
};

export default UserDetailPage;
