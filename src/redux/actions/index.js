export const setJobList = "setJobList";
export const addFavourite = "addFavourite";
export const removeFavourite = "removeFavourite";

export const getJobsAction = (data) => {
  return {
    type: setJobList,
    payload: data,
  };
};

export const removeFavouriteAction = (item) => {
  return {
    type: removeFavourite,
    payload: item,
  };
};

export const addFavouriteAction = (item) => {
    return {
        type: addFavourite,
        payload: item
    }
}

export const getCompanyJobsAction = (companyName) => {
    return async (dispatch) => {
    
      try {
        const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + companyName);
        if (response.ok) {
          const { data } = await response.json();
          dispatch({ type: setJobList, payload: data });
    
        } else {
          alert("Error fetching results");
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    }

export const setJobListAction =  (query) => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://strive-benchmark.herokuapp.com/api/jobs?search=" + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: setJobList, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
