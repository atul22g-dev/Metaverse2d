import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../service/AuthService';
import { toast } from 'react-toastify';

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const authService = new AuthService();
            const response = await authService.signin(userName, password);
            localStorage.setItem('metaverse2dToken', response)
            navigate("/");
        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <section className="bg-[var(--secandary-color)]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-[var(--primary-color)] border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                            Sign Up
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="test" className="block mb-2 text-sm font-medium text-white">Your Username</label>
                                <input type="text" name="username" value={userName} onChange={(e) => setuserName(e.target.value)} className="border outline-none text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="UserName" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="border outline-none text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                            <button type="submit" className="w-full cursor-pointer text-white bg-primary-600 border-2 border-gray-500 hover:bg-primary-700 focus:ring-1 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800">Sign Up</button>
                            <p className="text-sm font-light text-gray-400">
                                Create A Account? <Link to="/Signup" className="font-medium text-primary-600 hover:underline text-primary-500">Signup here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;

