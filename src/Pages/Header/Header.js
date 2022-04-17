import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="relative w-full flex items-center justify-between md:justify-around py-3 bg-gray-700 text-gray
        -100 hover:text-gray-100 focus:text-gray-100 shadow-lg navbar navbar-expand-lg navbar-light">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className=" navbar-toggler text-gray-100 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-col md:flex-row justify-between md:px-8 items-center text-center" id="navbarSupportedContent">
                    <div className='p-3'>
                        <Link className="text-xl md:m-0 mb-7 hover:text-red-500 duration-500 text-red-100" to="">Smart Photography</Link>
                    </div>
                    <ul className="navbar-nav flex items-center gap-3 md:gap-0 flex-col pl-0 list-style-none mr-auto">
                        <li className="nav-item px-2 py-1">
                            <Link className="nav-link hover:text-slate-400 duration-300 text-slate-100" aria-current="page" to="#">Home</Link>
                        </li>
                        <li className="nav-item pr-2 py-1">
                            <Link className="nav-link text-gray-100 hover:text-gray-400 duration-300 focus:text-gray-100 p-0" to="#">About Me</Link>
                        </li>
                        <li className="nav-item pr-2 py-1">
                            <Link className="nav-link text-gray-100 hover:text-gray-400 duration-300 focus:text-gray-100 p-0" to="#">Blogs</Link>
                        </li>
                        <li className="nav-item pr-2 py-1">
                            <Link className="nav-link text-gray-100 hover:text-slate-400 duration-300 focus:text-gray-100 p-0" to="#">Login</Link>
                        </li>
                        <button type="button" class="inline-block mt-2 md:mt-0 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-300 ease-in-out">Sign Up</button>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;