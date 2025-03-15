import { Link } from "react-router-dom";

const Navigations = () => {
  return (
    <nav className="flex w-full sm:justify-between flex-wrap gap-4 items-center px-6  md:px-30 py-4 justify-between">
      <h1 className="text-red-500  font-bold text-3xl">NETFLIX</h1>

      <Link
        to="/sign-in"
        className="bg-white py-2 px-4 cursor-pointer rounded text-black"
      >
        Sign In
      </Link>
    </nav>
  );
};

export default Navigations;
