import React from 'react';

export default function Tab({currentPath}) {
  return (
    <ul class="tab">
      <li>
        <a href="/now-playing">
          <div class={`tab-item ${currentPath === '/now-playing' ? 'selected' : ''}`}>
            <h3>상영 중</h3>
          </div>
        </a>
      </li>
      <li>
        <a href="/popular">
          <div class={`tab-item ${currentPath === '/popular' ? 'selected' : ''}`}>
            <h3>인기순</h3>
          </div>
        </a>
      </li>
      <li>
        <a href="/top-rated">
          <div class={`tab-item ${currentPath === '/top-rated' ? 'selected' : ''}`}>
            <h3>평점순</h3>
          </div>
        </a>
      </li>
      <li>
        <a href="/upcoming">
          <div class={`tab-item ${currentPath === '/upcoming' ? 'selected' : ''}`}>
            <h3>상영 예정</h3>
          </div>
        </a>
      </li>
    </ul>
  );
}
