// src/context/GithubContext.js
import React, { createContext, useState } from 'react';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchUser = async (username) => {
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userRes.json();
    setUser(userData);

    const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=5`);
    const repoData = await repoRes.json();
    setRepos(repoData);
  };

  return (
    <GithubContext.Provider value={{ user, repos, fetchUser }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
