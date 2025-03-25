import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Signup: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (password == cPassword) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/signin`, {
                    username:userName,
                    password,
                    type: "user"
                });
                console.log('Signup successful:', response.data);
            } catch (error) {
                console.error('Signup failed:', error);
            }
        }
    };

    return (
        <>
            <div className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8" >
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign Up</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="userName" className="block text-sm/6 font-medium text-gray-900">User Name:</label>
                            <div className="mt-2">
                                <input type="text" name="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                            <div className="mt-2">
                                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Conform Password</label>
                            <div className="mt-2">
                                <input type="password" name="cPassword" value={cPassword} onChange={(e) => setCPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Have a Account?
                        <Link to={'/Signin'} className="font-semibold text-indigo-600 pl-1 hover:text-indigo-500">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div >
        </>
    );
};

export default Signup;