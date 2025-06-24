// src/components/Search.js
import React, { useState, useContext } from 'react';
import GithubContext from '../context/GithubContext';

const Search = () => {
  const [username, setUsername] = useState('');
  const { fetchUser } = useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) fetchUser(username);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
