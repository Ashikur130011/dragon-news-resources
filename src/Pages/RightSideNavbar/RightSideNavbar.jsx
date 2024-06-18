import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaParachuteBox, FaTwitter } from "react-icons/fa";
import QZone1 from '../../assets/qZone1.png'
import QZone2 from '../../assets/qZone2.png'
import QZone3 from '../../assets/qZone3.png'

const RightSideNavbar = () => {
    return (
        <div className=''>
            <h1 className='text-2xl font-semibold m-3 text-start'>Login With</h1>
            <button className="btn w-full mb-4">
                <FaGoogle />
                Button
            </button>
            <button className="btn w-full">
                <FaGithub />
                Github
            </button>

            <div className='pt-6 p-3'>
                <h1 className='text-2xl font-semibold m-3 text-start'>Find Us on</h1>
                <a href="" className='items-center flex border rounded-t-lg p-4 text-lg'>
                    <FaFacebook className='mr-3'></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className='items-center flex border-x p-4 text-lg'>
                    <FaTwitter className='mr-3' />
                    <span>Twitter</span>
                </a>
                <a href="" className='items-center flex border rounded-b-lg p-4 text-lg'>
                    <FaParachuteBox className='mr-3' />
                    <span>Racebook</span>
                </a>
                
            </div>
            <div className='py-6'>
                <h1 className='text-2xl font-semibold m-3 text-start'>Find Us on</h1>
                <div className=''>
                    <img src={QZone1} alt="" />
                </div>
                <div className='py-4'>
                    <img src={QZone2} alt="" />
                </div>
                <div>
                    <img src={QZone3} alt="" />
                </div>
                </div>
        </div>

    );
};

export default RightSideNavbar;