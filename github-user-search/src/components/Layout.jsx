import React from "react";
import { Link } from "react-router-dom";
function Layout({ children }) {
  return (
    <div>
      <header>
        <nav className="flex bg-slate-500 pl-60 py-4 gap-6 font-bold text-lg text-slate-300">
          <Link to="/">Home</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="absolute bottom-0  bg-slate-700 w-full p-6 ">
        <p className="text-center text-slate-300">
          &copy; GitHub User Search App
        </p>
      </footer>
    </div>
  );
}

export default Layout;
