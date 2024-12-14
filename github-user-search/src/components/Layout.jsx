import React from "react";
import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <div>
      <header>
        <nav className=" flex p-6 gap-7 text-slate-800 bg-slate-200 items-center justify-start  ">
          <Link to="/" className="ml-40">
            Home
          </Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="absolute bottom-0 text-slate-500 text-center p-10 bg-slate-800 w-full">
        <p>&copy; guthub usersearsh app 2024</p>
      </footer>
    </div>
  );
}

export default Layout;
