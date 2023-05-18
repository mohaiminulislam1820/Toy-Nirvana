import React, { useContext } from 'react';
import { AuthContext } from '../Auth Components/AuthProvider';
import Loading from '../Page-Components/Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, currentLocation, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading />
    }
    
    return (
        <>
            {user
                ? <>{children}</>
                : <Navigate to='/login' state={{ from: currentLocation?.pathname }} replace />
            }
        </>
    );
};

export default PrivateRoute;