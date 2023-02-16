import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Input from '../components/default/Input';
import logo from './../assets/icons/logo.png';
import { useFormik } from 'formik';
import Button from '../components/default/Button';

interface ICredentials {
  email: string;
  password: string;
}

const Login = () => {
  const mockEmail = 'test@gmail.com';
  const mockPassword = 'test1';

  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values: ICredentials) => {
      setMail(values?.email);
      setPassword(values?.password);
    }
  });

  if (mockEmail === email && mockPassword === password) {
    return <Navigate to="/users" replace />;
  }

  return (
    <div className="place-items-center h-screen grid">
      <div className="w-full m-auto max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="">
            <img className="m-auto" src={logo} alt="logo" />
            <h5 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Welcome to iassistant!
            </h5>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <Input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter Ideas2IT Email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Input type="checkbox" value="" />
              </div>
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <a className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
              Forget Password?
            </a>
          </div>
          <Button
            type="submit"
            width="w-full"
            color="blue-700"
            textColor="white"
            value="Login to your account"
          />

          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?
            <a className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
