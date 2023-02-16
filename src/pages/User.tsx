import React from 'react';
import { Params, useParams } from 'react-router-dom';
import { useGetUser } from '../hooks/useGetUser';
import image from './../assets/images/erin-lindford.jpg';

export const User = () => {
  const { userId }: Readonly<Params<string>> = useParams();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading } = useGetUser(userId!);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1 className="font-bold my-4 text-center">User Details</h1>
      <div className=" mx-auto py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src={image}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{data?.data.username}</p>
            <p className="text-slate-500 font-medium">{data?.data.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};
