const defaultState = {
  postsInView: [],
};

const UPDATE_POSTS = "UPDATE_POSTS";

export const postsInArea = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return { ...state, postsInView: action.payload };
    default:
      return state;
  }
};

export const updatePosts = (payload) => ({ type: UPDATE_POSTS, payload });
