/* eslint-disable no-case-declarations */
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      const found = state.myList.find(index => index.id === action.payload.id);
      if (found) {
        return { ...state };
      }
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload),
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
