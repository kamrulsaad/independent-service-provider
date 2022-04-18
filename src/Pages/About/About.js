import React from "react";
import { Link } from "react-router-dom";
import profile from '../../Images/profile.png'

const About = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                <div className="relative lg:w-1/2">
                    <img
                        src={profile}
                        alt=""
                        className="object-cover w-full lg:absolute h-80 lg:h-full"
                    />
                    <svg
                        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                        viewBox="0 0 20 104"
                        fill="currentColor"
                    >
                        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                    </svg>
                </div>
                <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
                            Chill and Code
                        </p>
                    </div>
                    <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                        My 2022 Resolutions
                    </h5>
                    <p className="mb-5 text-gray-800">
                        <span className="font-bold">One Dream, </span> 
                        to be the best in the field of photography and web development. To excel is my only goal for this year. No turning back to the past. Only moving forward with what is today to build the better future.
                    </p>
                    <div className="flex items-center">
                        <a href="https://drive.google.com/file/d/1s7Sm3h-abXvaxmwo9tw7vGWN8yNQ2iXE/view?usp=sharing"
                            type="submit"
                            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-900 focus:shadow-outline focus:outline-none"
                        >
                            Download Resume
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kamrul-huda-sattari-saad-8b7454225/"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-600 hover:text-purple-800"
                        >
                            Contact Me
                            <svg
                                className="inline-block w-3 ml-2"
                                fill="currentColor"
                                viewBox="0 0 12 12"
                            >
                                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About