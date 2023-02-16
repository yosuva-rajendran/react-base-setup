import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllUsers } from "../pages/AllUsers";
import { Counter } from "../pages/Counter";
import { User } from "../pages/User";
import HomePage from "../pages/HomePage";
import Layout from "../layouts/Layout";
import Login from "../pages/Login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="counter" element={<Counter />} />
          <Route path="home" element={<HomePage />} />
          <Route path="users">
            <Route index element={<AllUsers />} />
            <Route path=":userId" element={<User />} />
          </Route>
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
