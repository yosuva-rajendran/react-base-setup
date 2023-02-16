import React from 'react';
import { Link } from 'react-router-dom';
import image from './../../assets/images/iassistant.png';

const Header = () => {
  return (
    <nav className="flex justify-between shadow p-4">
      <div className="flex items-center">
        <img className="w-10" src={image} alt="iassitant-logo" />
        <p className="mx-2 font-semibold">Ideas2IT</p>
      </div>
      <ul className="flex items-center space-x-4 hidden md:flex">
        <li className=" px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link to="/home">Home</Link>
        </li>
        <li className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link to="/users">All Users</Link>
        </li>
        <li className="px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
