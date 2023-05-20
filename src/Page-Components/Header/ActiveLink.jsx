import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'text-black border-b-8 pb-1 border-b-cyan-600 font-bold text-lg' : 'text-gray-500 pb-1 font-bold text-lg'}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;