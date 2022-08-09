import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? 'loading' : 'pagination'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((user) => {
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
