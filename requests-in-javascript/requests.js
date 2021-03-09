const axios = require("axios");
const url = "http://localhost:5000/constellations";

// axios
//     .get(url)
//     .then( (response) => {
//         console.log(response.status);
//         console.log(response.statusText);
//         console.log(response.data.filter( (constellation) => {
//             return constellation.starsWithPlanets < 10;
//         }));
//     })
//     .catch( (error) => {
//         console.log(error.message);
//     });

const constBody = {
  name: "Ara",
  meaning: "Altar",
  starsWithPlanets: 7,
  quadrant: "SQ3",
  id: "DVaSPTf",
};

// axios
//     .post(url, constBody)
//     .then( (response) => {
//         console.log(response.data);
//     });

// axios
//     .delete(`${url}/${constBody.id}`)
//     .then( (response) => {
//         console.log(response.status);
//         console.log(response.data);
//     });

axios
    .get(url)
    .then( (response) => {
        console.log(response.status);
        console.log(response.data);
    });
