import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';


const Contact = () => {


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        toast(`Thanks ${data?.firstName} for your booking` , {position: 'top-center'} )
    }


    return (
        <div className='md:h-[550px] flex items-center justify-center'>
            <form className='flex md:w-1/2 flex-col gap-3 p-12 border-4' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-3xl text-center font-semibold text-purple-500'>Contact Info</h1>
                <input className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none' {...register("firstName")} placeholder="First Name" />
                <input className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none' {...register("lastName")} placeholder="Last Name" />
                <input className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none' {...register("phoneNumber")} placeholder="Phone Number" />
                <input className=' w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-purple-600 focus:outline-none' {...register("adress")} placeholder="Contact Adress" />

                <input className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 cursor-pointer' type="submit" />
            </form>
            <ToastContainer/>
        </div>
    );
}

export default Contact;