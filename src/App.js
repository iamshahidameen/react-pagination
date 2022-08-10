import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(5);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  const handlePage = (e) => {
    setPage(e.target.dataset.handle);
    console.log(e.target.dataset.handle);
    console.log(page);
  };
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

          {data.map((pageinate, index) => {
            return (
              <>
                <button
                  className={
                    index === Number(page) ? 'page-btn active-btn' : 'page-btn'
                  }
                  data-handle={index}
                  onClick={handlePage}
                >
                  {index + 1}
                </button>
              </>
            );
          })}

          <button className="next-btn">next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
