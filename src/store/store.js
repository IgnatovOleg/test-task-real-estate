import { postReducer } from "./postsReducer";
import { combineReducers, createStore } from "redux";
import { currentPostsReducer } from "./currentPostsReducer";
import { postsInArea } from "./postsInAreaReducer";
import { coordsReducer } from "./coordsReducer";

const rootReducer = combineReducers({
  posts: postReducer,
  currentPosts: currentPostsReducer,
  postsInView: postsInArea,
  coords: coordsReducer,
});

export const store = createStore(rootReducer);
