import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [agreed, setAgreed] = useState(false)

    const [createUserWithEmail, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth)
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth)

    const user = emailUser || googleUser;
    const loading = emailLoading || googleLoading || updating;
    const error = emailError || googleError || updatingError;

    const navigate = useNavigate();

    const handleFormSubmit = async e => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmail(email, password)
        await updateProfile({ displayName: name })
        toast("Verification email sent, please check your email account" + name , { position: 'bottom-right' })
    }

    useEffect(() => { if (user) navigate('/home') }, [navigate, user])

    if (loading) return <Loading></Loading>

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <form className='mb-5' onSubmit={handleFormSubmit}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4">Sign in with:</p>
                                <button
                                    onClick={() => signInWithGoogle()}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>

                                </button>

                                <button
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
                                        <path
                                            fill="currentColor"
                                            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                        />
                                    </svg>
                                </button>



                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0">Or</p>
                            </div>

                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='name'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput3"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="email"
                                    name='email'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Email address"
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                    required
                                />
                                <p className='text-red-600 mt-4 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out'>{error && error?.message}</p>
                            </div>

                            <div className="mb-6">
                                <div className="form-group form-check">

                                    <input
                                        onClick={() => setAgreed(!agreed)}
                                        checked={agreed}
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2">
                                        I Accept the Terms and Conditions
                                    </label>
                                </div>
                            </div>

                            <div className="text-center lg:text-left">
                                <input
                                    disabled={!agreed}
                                    type="submit"
                                    className={`inline-block btn px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ${agreed ? 'opacity-100 cursor-pointer' : 'opacity-50 cursor-not-allowed'}`} value="Register" />
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already Registered?
                                    <Link
                                        to="/login"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out">Login</Link>
                                </p>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Register;