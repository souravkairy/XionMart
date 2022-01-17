import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useForm } from "react-hook-form";
const UserAccountsPage = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const userAuth = (data) => {
        console.log(data);
        reset();
    };
    const newUser = (data) => {
        console.log(data);
        reset();
    };
    return (
        <MainLayout>
            <div className="flex flex-wrap justify-between py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-6">
                    <div>
                        <h2 className="mt-6 text-3xl font-semibold text-gray-900">I already have an account</h2>
                        <p>Sign in with your email and password</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(userAuth)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    type="email"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-sm text-red-600 font-light">Please fill the field properly</span>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap space-x-2">
                            <button
                                type="submit"
                                className="flex-1 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign in
                            </button>
                            <button
                                className="flex-1 justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-indigo-700 "
                            >
                                Sign in with google
                            </button>
                        </div>
                    </form>
                </div>
                <div className="max-w-md w-full space-y-6">
                    <div>
                        <h2 className="mt-6 text-3xl font-semibold text-gray-900">I do not have a account</h2>
                        <p>Sign up with your email and password</p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(newUser)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Name"
                                    {...register("name", { required: true })}
                                />
                            </div>
                            <div>
                                <label htmlFor="mobile-number" className="sr-only">
                                    Mobile Number
                                </label>
                                <input
                                    id="mobile-number"
                                    type="text"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Mobile Number"
                                    {...register("mobile_number")}
                                />
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    type="email"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                            </div>
                            {errors.password && <span className="text-sm text-red-600 font-light">Please fill the field properly</span>}
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>

    )
}
export default UserAccountsPage
