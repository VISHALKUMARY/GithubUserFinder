import React, { useContext } from 'react';
import GithubContext from '../context/GithubContext';

const UserCard = () => {
  const { user, repos } = useContext(GithubContext);

  if (!user || user.message === 'Not Found') return null;

  return (
    <>
    
   <div className="card">
  <img src={user.avatar_url} alt="avatar" />
  <div className="card-content">
    <h1>{user.name || user.login}</h1>
    <p><strong>Username:</strong> {user.login}</p>
    {user.bio && <p><strong>Bio:</strong> {user.bio}</p>}
    {user.location && <p><strong>Location:</strong> {user.location}</p>}
    <p><strong>Followers:</strong> {user.followers}</p>
    <p><strong>Following:</strong> {user.following}</p>
    <p><strong>Public Repositories:</strong> {user.public_repos}</p>
    <p><strong>Public Gists:</strong> {user.public_gists}</p>
    <p><strong>Account Created:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
    <a href={user.html_url} target="_blank" rel="noreferrer">GitHub Profile</a>
  </div>

  {repos.length > 0 && (
    <div className="repo-list">
      <h3>Latest Repositories</h3>
      <ul className="repo-row">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
            <p>{repo.description || 'No description'}</p>
          </li>
        ))}
      </ul>
    </div>
  )}
</div>
</>
  );
};

export default UserCard;
