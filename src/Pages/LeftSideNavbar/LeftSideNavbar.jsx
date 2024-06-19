import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavbar = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='space-y-6'>
            <h1 className='text-2xl text-left'>All Category</h1>
            {
                categories.map(category => <Link 
                    key={category.id} 
                    className='block ml-6 text-left text font-semibold'
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNavbar;