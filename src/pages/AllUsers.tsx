import { BaseSyntheticEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/default/Button';
import Input from '../components/default/Input';
import { useAddUser } from '../hooks/useAddUser';
import { useGetUsers } from '../hooks/useGetUsers';

export interface IUser {
  id?: number;
  username?: string;
  email?: string;
}

export const AllUsers = () => {
  const [username, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { data: users, isLoading } = useGetUsers();
  const { mutate: postUser } = useAddUser();

  const createUser = () => {
    const user = { username, email } as IUser;
    postUser(user);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="grid  grid-cols-2 mt-10 gap-4">
        <div className="p-20">
          <div className="shadow-lg px-10 pt-7 border col-span-1 w-50 h-72 ">
            <div className="">
              <h2 className="text-center font-semibold">User Registration</h2>
              <div className="mt-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Name
                </span>
                <Input
                  type="text"
                  value={username}
                  placeholder="Enter your name"
                  onChange={(e: BaseSyntheticEvent) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="my-5">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  onChange={(e: BaseSyntheticEvent) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <Button
                onClick={createUser}
                value="Create User"
                color="blue-700"
                width="w-full"
                textColor="white"
                margin="m-2"
              />
            </div>
          </div>
        </div>
        <div className="p-20">
          <div className="w-50 border h-72">
            <h3 className="font-bold my-2 text-center underline">Users</h3>
            <div className="scroll-smooth overflow-auto h-60 ml-2">
              {users?.data.map((user: IUser) => {
                return (
                  <p key={user.id}>
                    <Link className="text-blue-600" to={`/users/${user.id}`}>
                      {user.id}.{user.username}
                    </Link>
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
