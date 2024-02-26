const defaultState = {
  currentPosts: null,
};

const ADD_CURRENT_POST = "ADD_CURRENT_POST";
const ADD_NEW_POST = "ADD_NEW_POST";

export const currentPostsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CURRENT_POST:
      return { ...state, currentPosts: action.payload };
    case ADD_NEW_POST:
      return {
        ...state,
        currentPosts: [...state.currentPosts, action.payload],
      };
    default:
      return state;
  }
};

export const addCurrentPosts = (payload) => ({
  type: ADD_CURRENT_POST,
  payload,
});
export const addNewPost = (payload) => ({ type: ADD_NEW_POST, payload });
