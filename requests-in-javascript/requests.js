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

// const constBody = {
//   name: "Ara",
//   meaning: "Altar",
//   starsWithPlanets: 7,
//   quadrant: "SQ3",
//   id: "DVaSPTf",
// };

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

// axios
//     .get(url)
//     .then( (response) => {
//         console.log(response.status);
//         console.log(response.data);
//     });


const BASE_URL = "http://localhost:5000";
const constellationsUrl = `${BASE_URL}/constellations`;

const leo = {
    name: "Leo",
    meaning: "Lion",
    starsWithPlanets: 19,
    quadrant: "NQ2",
};

// axios
//   .get(constellationsUrl)
//   .then(({ data }) => {
//     const exists = data.find(({ name }) => name === leo.name);
//     if (exists) throw `Constellation "${leo.name}" already exists.`;
//     return axios
//       .post(constellationsUrl, leo)
//       .then(({ data }) => console.log(data));
//   })
//   .catch(console.log);


  axios
  .get(constellationsUrl)
  .then(({ data }) => {
    return data.find(({ name }) => name === leo.name);
  })
  .then((exists) => {
    if (exists) throw `Constellation "${leo.name}" already exists.`;
    return axios.post(constellationsUrl, leo);
  })
  .then(({ data }) => console.log(data))
  .catch(console.log);

  // Flatter and cleaner version