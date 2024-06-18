import React from 'react';
import Header from '../Shared/Header';
import Navbar from '../Shared/Navbar';
import LeftSideNavbar from '../LeftSideNavbar/LeftSideNavbar';
import RightSideNavbar from '../RightSideNavbar/RightSideNavbar';
import BreakingNews from './BreakingNews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <BreakingNews/>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                <div className=''>
                    <LeftSideNavbar/>
                </div>
                <div className='md:col-span-2 '>
                    <h1 className="text-4xl">News Comming Soon</h1>
                </div>
                <div>
                    <RightSideNavbar/>
                </div>
            </div>
        </div>
    );
};

export default Home;