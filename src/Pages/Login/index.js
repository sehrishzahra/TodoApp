import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    };

    const toggleShowPassword = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div class="lg:py-0 flex flex-col items-center justify-center h-[720px] w-[100vw] ">

                <div class=" w-[343px] h-[296px] flex flex-col items-center  ">

                    <h1 class="w-[88px] h-[36px] top-[212px] left-[597px] mb-[20px]  font-semibold text-center leading-tight tracking-tight text-[#000000] " style={{ fontSize: '30px', fontWeight: '600' }}>
                        Log In
                    </h1>

                    <form class="space-y-4 mt-[1.3rem] flex text-center items-center flex-col h-[220px] max-[335px]:w-[80%] w-[100%] " action="#">
                        <div className='flex flex-col gap-[14px] w-[100%]'>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="bg-gray-100 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 
                                 placeholder-[#BDBDBD] focus:border-primary-600 block w-full p-2.5 md:w-[343px] h-[50px] font-medium w-full sm:w-[100%]" style={{ fontSize: '16px' }}
                                placeholder="Email"
                                required="" />

                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="password"
                                    class="bg-gray-100 border placeholder-[#BDBDBD] border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 sm:w-[100%] md:w-[343px] h-[50px] w-full font-medium text-[16px]"
                                    required=""
                                />
                            </div>
                        </div>
                        <button
                            className='relative right-[-130px] bottom-[53px] md:right-[-140px] sm:w-[100%] max-[335px]:right-[-108px] '
                            style={{ fontWeight: '500' }}
                            onClick={toggleShowPassword}>
                            {showPassword ? 'Hide' : 'Show'}</button>


                        <Link
                            type="submit"
                            to={'/taskPage'}
                            class="w-full text-white bg-[#000000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex text-center justify-center items-center w-[343px] h-[51px]"
                            style={{ fontSize: '16px', borderRadius: '100px' }}
                        >Log In</Link>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login