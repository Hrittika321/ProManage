import React from 'react';

const Login = () => {
  return (
    <div className=" h-full w-400 flex items-center justify-baseline ml-40">
      <div className="h-auto w-120 bg-white  p-8 rounded shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>

        <form>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email: 
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password: 
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/landing/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

