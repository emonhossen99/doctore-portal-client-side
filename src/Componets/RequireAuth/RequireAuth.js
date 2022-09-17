import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shered/Loading/Loading';

const RequireAuth = ({ children }) => {
    const location = useLocation();
    const [user,loading] = useAuthState(auth)
    const [sendEmailVerification, sending, error] = useSendEmailVerification(
        auth
    );
    if (loading ||sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-red-500'>{error?.message}
        </p>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if (user.providerData[0].providerId === 'password' && !user.emailVerified) {
        return <div className='flex justify-center'>
            <button
                className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('sent!!')
                }}
            >
                Sent Verify Email
            </button>
            {
                errorElement
            }
        </div>
    }
    return children;
};

export default RequireAuth;