import { Link } from "react-router-dom";

export const SideNavbar = () => {
  return (
    <div className="bg-blue-700 hidden md:block ">
      <div className="" style={{ height: "calc(100vh - 72px)" }}>
        <Link to="/home">
          <p className="pt-7 pl-4 text-white hover:text-blue-400">Home</p>
        </Link>
        <Link to="/users">
          <p className="pt-4 pl-4 text-white hover:text-blue-400">
            All Users
          </p>
        </Link>
        <Link to="/counter">
          <p className="py-4 pl-4 text-white hover:text-blue-400">Counter</p>
        </Link>
      </div>
    </div>
  );
};
