import React, { useState } from 'react'

function Login() {
  const [state, setState] = useState('');

  return (
    <div className="flex justify-center items-center my-8  ">
      <div className="bg-white p-4 rounded-md border border-blue-800 w-full max-w-xs">
        <h1 className="text-lg font-semibold text-center text-blue-800 mb-2">
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </h1>
        
        <p className="text-sm text-gray-600 text-center mb-4">
          Please {state === 'sign up' ? 'sign up' : 'login'} to book an appointment
        </p>

        {state === 'sign up' && (
          <div className="mb-2">
            <label className="block text-xs text-gray-700 font-medium mb-1" htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-800"
              placeholder="Full name"
            />
          </div>
        )}

        <div className="mb-2">
          <label className="block text-xs text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-800"
            placeholder="Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-xs text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-800"
            placeholder="Password"
          />
        </div>

        <button className="w-full py-1 bg-blue-800 text-white text-sm rounded hover:bg-blue-600 transition-all duration-300">
          {state === 'sign up' ? 'Create Account' : 'Login'}
        </button>
        <p className="mt-3  text-xs text-gray-600">
          {state === 'sign up' ? '' : <p className='text-blue-800 cursor-pointer'>Forget Password?</p>}
         
        </p>
        <p className="mt-1  text-xs text-gray-600">
          {state === 'sign up' ? 'Already have an account?' : 'Don\'t have an account?'}
          <span
            className="text-blue-800 text-xs font-medium cursor-pointer ml-1 hover:underline"
            onClick={() => setState(state === 'sign up' ? '' : 'sign up')}
          >
            {state === 'sign up' ? 'Login here' : 'Sign up here'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
