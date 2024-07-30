import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="flex justify-center gap-24  bg-zinc-200 p-2 ">
        <li className="font-medium text-lg hover:bg-black hover:text-white cursor-pointer">
          <Link to="/"> Home</Link>
        </li>
        <li className="font-medium text-lg hover:bg-black hover:text-white cursor-pointer">
          <Link to="blog">Blogs</Link>
        </li>
        <li className="font-medium text-lg hover:bg-black hover:text-white cursor-pointer">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
