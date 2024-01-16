const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "setJobList":
      return {
        jobs: [action.payload],
      };
    default:
      return state;
  }
};

export default jobReducer;
