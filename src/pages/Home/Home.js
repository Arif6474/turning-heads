import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadBlogsData from '../../redux/thunk/blogs/loadBlogsData';
import Header from '../Header/Header';

const Home = () => {
    const blogs = useSelector((state) =>state.blogs)
    console.log(blogs);
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(loadBlogsData())
    },[])
    return (
        <div>
         <Header/>
        </div>
    );
};

export default Home;