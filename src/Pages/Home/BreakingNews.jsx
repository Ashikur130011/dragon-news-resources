import React from 'react';
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className='flex my-8'>
            <button className="btn btn-secondary">Breaking News</button>
            <Marquee className='space-x-4'  speed={100} gradientColor='blue' pauseOnHover={true}>
                I can be a React component, multiple React components, or just some text.
            </Marquee>
            
        </div>
    );
};

export default BreakingNews;