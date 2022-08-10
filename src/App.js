import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);
  const handlePage = (e) => {
    setPage(e.target.dataset.handle);
    console.log(e.target.dataset.handle);
    console.log(page);
  };
  const handlePagination = (pageValue) => {
    if (pageValue === 'next') {
      if (page >= data.length - 1) {
        setPage(0);
      } else {
        setPage(page + 1);
      }
    }
    if (pageValue === 'prev') {
      if (page <= 0) {
        setPage(data.length - 1);
      } else {
        setPage(page - 1);
      }
    }
  };
  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
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
          <button className="prev-btn" onClick={() => handlePagination('prev')}>
            prev
          </button>

          {data.map((paginate, index) => {
            return (
              <button
                key={index}
                className={
                  index === Number(page) ? 'page-btn active-btn' : 'page-btn'
                }
                data-handle={index}
                onClick={handlePage}
              >
                {index + 1}
              </button>
            );
          })}

          <button className="next-btn" onClick={() => handlePagination('next')}>
            next
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
