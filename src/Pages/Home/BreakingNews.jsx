import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
    return (
        <div className='flex my-8'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee speed={100} pauseOnHover={true}>
                <Link to="/" className='mr-12'>I can be a React component, multiple React components, or just some text.</Link>
                <Link to="/" className='mr-12'>I can be a React component, multiple React components, or just some text.</Link>
                <Link to="/" className='mr-12'>I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;