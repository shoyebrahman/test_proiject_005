import { Modetoggole } from "@/components/Modetoggole";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
             <div className="hero">
          <h1 className="text-yellow-700">DOO NOW</h1>
        </div>
          <div className="flex">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">My App</h1>
              <Link to="/" className="ml-4 text-gray-500 hover:text-gray-700">
                Task
              </Link>
              <Link to="/users" className="ml-4 text-gray-500 hover:text-gray-700">
                Users
              </Link>
              <Link to="/login" className="ml-4 text-gray-500 hover:text-gray-700">
                Login
              </Link>
              <div className="ml-auto bg-black">
                <Modetoggole></Modetoggole>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;