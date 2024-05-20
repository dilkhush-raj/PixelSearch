import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if (search.trim()) {
      navigate(`/image?search=${encodeURIComponent(search)}`);
    }
  };

  return (
    <div className='px-10 py-2 bg-white shadow-sm h-[60px] flex items-center justify-between'>
      <h1>Navbar</h1>
      <div>
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder='search here...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='px-4 py-2 bg-gray-200 rounded-lg'
          />
          <button type="submit" className='px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg'>Search</button>
        </form>
      </div>
    </div>
  );
}

export default Navbar;
