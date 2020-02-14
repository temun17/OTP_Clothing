const INITIAL_STATE = {
  isHidden: true
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_DROPDOWN":
      return {
        ...state,
        isHidden: !state.isHidden
      };
    default:
      return state;
  }
};

export default cartReducer;
