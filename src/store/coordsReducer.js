const defaultState = {
  coords: [],
};

const GET_COORDS = "GET_COORDS";

export const coordsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_COORDS:
      return { ...state, coords: action.payload };
    default: 
    return state
  }
};

export const getCoords = (payload) => ({ type: GET_COORDS, payload });
