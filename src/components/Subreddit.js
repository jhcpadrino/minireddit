
import './css/subredit.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { fetchSubreddits, selectSubreddits } from '../app/subRedditSlice';

import {
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from '../app/redditSlice';

const Subreddits = () => {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [dispatch]);

  return (<>
    <div className='subredit'>
    <h1>Subreddits</h1>
    <Card className="subreddit-card">
     
      <ul className="subreddits-list">
        {subreddits.map((subreddit) => (
          <li
            key={subreddit.id}
            className={`${
              selectedSubreddit === subreddit.url && `selected-subreddit`
            }`}
          >
            <button
              type="button"
              onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
            >
              <img
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
                className="subreddit-icon"
                style={{ border: `3px solid ${subreddit.primary_color}` }}
              />
              {subreddit.display_name}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  </div>
  </>);
};

export default Subreddits;
