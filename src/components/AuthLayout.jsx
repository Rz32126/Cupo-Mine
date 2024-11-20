import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const AuthLayout = () => {
    return (
        <div>
            <header className='mt-3'>
                <Header></Header>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;