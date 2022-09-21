import React from 'react';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../Shered/Loading/Loading';
import { useRef, useEffect } from 'react';
import useToken from '../../hooks/MyToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate()
    const emailRef = useRef()
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [token] = useToken(user || gUser)
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token,from,navigate])
    if (loading || gLoading || sending) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error || gError || resetError) {
        errorElement = <p className='text-red-500'>{error?.message || gError?.message}
        </p>
    }


    const handleResetPassword = () => {
        const email = getValues("email");
        sendPasswordResetEmail(email)
        alert('send Email Reification')
    }
    return (
        <div className='flex h-full justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-lg text-primary">LogIn</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                ref={emailRef}
                                placeholder="Enter Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'email is required'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 charechater'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p>
                            Reset Password ??
                            <button onClick={handleResetPassword} className="text-primary mb-3 bg-none">Reset Pass..</button>
                        </p>
                        {errorElement}
                        <input type="submit" className="btn btn-outline btn-success w-full max-w-xs " value='LogIn' />
                    </form>
                    <p>
                        New To DocTors Portal ??
                        <Link className='text-primary mx-2' to='/singup'>Sing Up</Link>
                    </p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-secondary">Continue To Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login; 