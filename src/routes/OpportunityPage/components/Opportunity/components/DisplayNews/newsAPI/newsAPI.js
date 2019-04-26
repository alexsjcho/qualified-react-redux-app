export const fetchData = searchText => {
  let url = `https://newsapi.org/v2/everything?sources=techcrunch&q=${searchText}&apiKey=${
    process.env.REACT_APP_NEWS_API_KEY
  }&pageSize=3`;
  let request = new Request(url);

  return fetch(request)
    .then(response => response.json())
    .then(data => data)
    .catch(event => alert("Try again!"));
};
