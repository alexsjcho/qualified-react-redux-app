import axios from "axios";

// let url = `https://newsapi.org/v2/top-headlines?' +
//           'q=Apple&' +
//           'from=${dateToday}}&' +
//           'sortBy=popularity&' +
//           'apiKey=${APIKEY}`;
// let req = new Request(url);

// fetch(req).then(function(response) {
//   console.log(response.json());
// });

const KEY = "a310131ea6924d1591c9630b13d83e68";
let dateToday = new Date().toLocaleDateString();

export default axios.create({
  baseURL: "https://newsapi.org/v2/top-headlines",
  params: {
    from: dateToday,
    totalResults: 3,
    key: KEY
  }
});
