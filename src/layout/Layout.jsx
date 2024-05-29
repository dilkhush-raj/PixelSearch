import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Navbar />
      <main className="mt-[60px] ">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
