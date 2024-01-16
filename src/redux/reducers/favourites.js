const initialState = {
  list: [],
};

const favReducer = (state = initialState, action) => {
    switch (action.type) {
      case "addFavourite":
        return {
          ...state,
          list: [...state.list, action.payload],
        };
  
      case "removeFavourite":
        return {
          ...state,
          list: [
            ...state.list.toSpliced(
              state.list.indexOf(action.payload),
              1
            ),
          ],
        };
      default:
        return state;
    }
  };
  

  export default favReducer