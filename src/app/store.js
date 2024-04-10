import { configureStore ,combineReducers} from '@reduxjs/toolkit';
import showPostReducer from './showPostSlice';
import redditReducer from './redditSlice';
import subRedditReducer from './subRedditSlice';

export const store =  configureStore({
  reducer: combineReducers({
    reddit: redditReducer,
    subreddits: subRedditReducer,
  }),
});