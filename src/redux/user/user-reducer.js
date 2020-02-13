const INITIAL_STATE = {
  isAuth: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        isAuth: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
