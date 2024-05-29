import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Logo from "./Logo";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate(`/image?search=${encodeURIComponent(search)}`);
    }
  };
  return (
    <>
      <nav className=" fixed pr-20 md:pr-7 right-0 left-0 flex top-0 z-50 shadow-sm h-[60px] items-center justify-between py-2 border-b px-7 bg-lightColor-900 border-border-100 dark:border-darkColor-400 bg-white ">
        <Logo />
        <div className="items-center hidden px-4 text-gray-400 border rounded-md md:flex dark:text-lightColor-500 bg-lightColor-700 dark:bg-darkColor-300 border-border-100 ">
          <span className="text-xl ">
            <FiSearch />
          </span>
          <form onSubmit={handleSearch}>
            <input
              type="search"
              placeholder="search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 rounded-lg min-w-80 active:outline-none focus:outline-none"
            />
          </form>
        </div>
      </nav>
    </>
  );
}
