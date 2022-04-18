import React from "react";

export const Blog = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://th.bing.com/th/id/OIP.y65oq7NaWVzH4A_TbOnALwHaE8?pid=ImgDet&rs=1"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">

                        <p
                            className="inline-block mb-3 text-2xl font-bold transition-colors duration-200 hover:text-deep-purple-accent-700 leading-7"
                        >
                            What are the Differences between "Authorization" and "Authentication"?
                        </p>
                        <p className="mb-2 text-gray-700">
                            Authentication means the process in which the users identity is checked for providing access. On the other hand, authorization is the process in which the user's identity is measured for giving access to speicific resources.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://i.ytimg.com/vi/Gm4b3iTbfzE/maxresdefault.jpg"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p
                            className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            Why are we using firebase? What alternatives are there to implement authentication?
                        </p>
                        <p className="mb-2 text-gray-700">
                            We are using firebase for the purpose of integrating authentication and authorization system for the users of our web application. Some alternatives of firebase are : Okta, Passport, Auth0, MongoDB, Keycloak etc.
                        </p>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://th.bing.com/th/id/OIP.eI1q0FJjBBRswg9a4f3YDAHaD8?pid=ImgDet&rs=1"
                        className="object-cover w-full h-64"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">

                        <p
                            className="inline-block mb-3 text-2xl font-bold leading-7 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            What other services does firebase provide other than authentication?
                        </p>
                        <p className="mb-2 text-gray-700">
                            Including Authentication, Firebase has total 18 services(4 beta services). The other few services by firebase worth mentioning are: Hosting, Cloud Storage, Realtime Database, Cloud Functions, Performance Monitoring etc.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};