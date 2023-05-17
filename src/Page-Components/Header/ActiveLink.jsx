import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? 'text-[#373939] border-b-4 border-blue-600 font-bold text-lg' : 'text-[#8f9090] font-bold text-lg'}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;