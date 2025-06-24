import React from 'react';
import { GithubProvider } from './context/GithubContext';
import Search from './components/Search';
import UserCard from './components/UserCard';
import { FaGithub } from 'react-icons/fa';
import './App.css';

const App = () => {
  return (
    <GithubProvider>
      <div className="container relative">
        
        <FaGithub
          className="absolute text-gray-100 opacity-10"
          style={{
            fontSize: '400px',
            top: '50%',
            left: '50%',
            marginTop:'100px',
            transform: 'translate(-50%, -50%)',
            zIndex: '-1',
            position: 'absolute'
          }}
        />

        <h1>GitHub User Finder</h1>
        <Search />
        <UserCard />
      </div>
    </GithubProvider>
  );
};

export default App;
