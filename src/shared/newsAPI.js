let url = `https://newsapi.org/v2/top-headlines?' +
          'q=Apple&' +
          'from=${dateToday}}&' +
          'sortBy=popularity&' +
          'apiKey=${APIKEY}`;

let req = new Request(url);

const APIKEY = "a310131ea6924d1591c9630b13d83e68";

let dateToday = new Date().toLocaleDateString();

fetch(req).then(function(response) {
  console.log(response.json());
});

export default newsAPI;
