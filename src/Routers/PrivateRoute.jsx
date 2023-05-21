import React, { useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../Auth Components/AuthProvider';
import Loading from '../Page-Components/Loading';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children }) => {

    const { user, currentLocation, loading } = useContext(AuthContext);

    const refToast = useRef();
    
    useEffect(() => {
        refToast.current=true;
    }, []);

    if (loading) {
        return <Loading />
    }

    if (!user) {

        if (refToast.current)
            toast('⚠️ You have to Login first')
        refToast.current = false;
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