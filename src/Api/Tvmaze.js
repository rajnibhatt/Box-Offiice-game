const apiGet = async (queryString)=>{
    // throw new Error("Something bad hhappende");
    const response = await fetch(`https://api.tvmaze.com/${queryString}`);
    const body = await response.json();
    return body;
};
export const searchForShows = (query) => apiGet(`search/shows?q=${query}`);
export const searchForPeople = (query) =>apiGet(`search/people?q=${query}`);