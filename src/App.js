import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';
function App() {
  return (
    <main>
      <div class="section-title">
        <h1>pagination</h1>
        <div class="underline"></div>
      </div>
      <section class="followers">
        <div class="container">
          <article class="card">
            <img
              src="https://avatars.githubusercontent.com/u/3006?v=4"
              alt="tarasis"
            />
            <h4>tarasis</h4>
            <a href="https://github.com/tarasis" class="btn">
              view profile
            </a>
          </article>
        </div>
        <div class="btn-container">
          <button class="prev-btn">prev</button>
          <button class="page-btn active-btn">1</button>
          <button class="page-btn null">2</button>
          <button class="page-btn null">3</button>
          <button class="page-btn null">4</button>
          <button class="page-btn null">5</button>
          <button class="page-btn null">6</button>
          <button class="page-btn null">7</button>
          <button class="page-btn null">8</button>
          <button class="page-btn null">9</button>
          <button class="page-btn null">10</button>
          <button class="next-btn">next</button>
        </div>
      </section>
    </main>
  );
}

export default App;
