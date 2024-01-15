const initialState = {
  favourites: [],
  jobList: []
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addFavourite":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case "removeFavourite":
      return {
        ...state,
        favourites: [
          ...state.favourites.toSpliced(
            state.favourites.indexOf(action.payload),
            1
          ),
        ],
      };

	  case "setJobList":
		return {
			...state, jobList: action.payload
		}

    default:
      return state;
  }
};

export default mainReducer;
