import React from 'react';
import MainNav from '../Header/MainNav';
import { Outlet } from 'react-router';

const AuthLayouts = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <div className='w-10/12 mx-auto'>
                <header>
                    <MainNav></MainNav>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default AuthLayouts;