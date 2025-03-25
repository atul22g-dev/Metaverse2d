import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`, {
                username:userName,
                password,
            });
            console.log('Signup successful:', response.data.token);
            localStorage.setItem("metaver2token", response.data.token);
        } catch (error) {
            console.error('Signup failed:', error);
        }
    };

    return (
        <>
            <div className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8" >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign In</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="userName" className="block text-sm/6 font-medium text-gray-900">UserName</label>
                            <div className="mt-2">
                                <input type="text" name="username" value={userName} onChange={(e) => setuserName(e.target.value)} autoComplete="userName" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>

                            <div className="mt-2">
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?
                        <Link to={'/Signup'} className="font-semibold text-indigo-600 pl-1 hover:text-indigo-500">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div >
        </>
    );
};

export default SignIn;

