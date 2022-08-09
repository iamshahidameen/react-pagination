import React from 'react';

const Follower = ({
  id,
  login,
  avatar_url,
  url,
  followers_url,
  following_url,
}) => {
  return (
    <article className="card">
      <img src={avatar_url} alt={login} />
      <h4>tarasis</h4>
      <a href={url} className="btn">
        view profile
      </a>
    </article>
  );
};

export default Follower;
