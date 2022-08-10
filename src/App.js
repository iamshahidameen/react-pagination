import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  // console.log(data, 'in appJS');
  // console.log(followers, 'follll');

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading]);
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((user) => {
            return <Follower key={user.id} {...user} />;
          })}
        </div>
        <div className="btn-container">
          <button className="prev-btn">prev</button>
          <button className="page-btn active-btn">1</button>
          <button className="page-btn null">2</button>
          <button className="next-btn">next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
