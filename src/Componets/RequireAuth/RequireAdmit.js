import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';
import useAdmit from "../../hooks/useAdmit";
import { signOut } from 'firebase/auth';

const RequireAdmit = ({ children }) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth)
    const [admit,admitLoading] = useAdmit(user)
    
    if (loading || admitLoading) {
        return <Loading></Loading>
    }
    else if (!user || !admit) {
        signOut(auth)
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAdmit;