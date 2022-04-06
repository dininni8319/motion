import React from 'react'
import { useParams } from 'react-router';
import { useState, useEffect, useContext } from 'react';
import { Navbar, FormUserProfile, Header, SideBar } from './../../UI/index';
import { UserProfileStyle } from './UserProfileStyle';
import { PostsContext } from '../../Context/PostsContext';

const UserDetailPage = () => {
    let { slug } = useParams();
    let { getUsersProfile } = useContext(PostsContext)
    
    return (
        <UserProfileStyle>
            <Navbar /> 
            <SideBar allUsers={getUsersProfile} />
            <Header />
            <FormUserProfile slug={slug} /> 
        </UserProfileStyle>
    )
};

export default UserDetailPage;
