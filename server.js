const fs = require("fs");
// const { finished } = require("stream");
var axios = require("axios").default;

// var options = {
//   method: "GET",
//   url: "https://api-football-v1.p.rapidapi.com/v3/odds",
//   params: { date: "2022-02-08", page: "1" },
//   headers: {
//     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//     "x-rapidapi-key": "9b6ea5d6f4msh9a268c56b4223b5p117d78jsn85ae5019911a",
//   },
// };

// axios
//   .request({
//     method: "GET",
//     url: "https://api-football-v1.p.rapidapi.com/v3/odds",
//     params: { date: "2022-02-08", page: "1" },
//     headers: {
//       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//       "x-rapidapi-key": "9b6ea5d6f4msh9a268c56b4223b5p117d78jsn85ae5019911a",
//     },
//   })
//   .then(function (response) {
//     console.log(response.data.response);
//     // console.log(response);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

// function getOdds(date, page) {
//   axios
//     .request({
//       method: "GET",
//       url: "https://api-football-v1.p.rapidapi.com/v3/odds",
//       params: { date: formatDate(date), page: page },
//       headers: {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "9b6ea5d6f4msh9a268c56b4223b5p117d78jsn85ae5019911a",
//       },
//     })
//     .then(function (response) {
//       console.log(response.data.paging.total);
//       return response.data.paging.total;

//       // console.log(response);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

// function getOddsAll(getDate, getePage) {
//   axios
//     .request({
//       method: "GET",
//       url: "https://api-football-v1.p.rapidapi.com/v3/odds",
//       params: { date: formatDate(getDate), page: getePage },
//       headers: {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "9b6ea5d6f4msh9a268c56b4223b5p117d78jsn85ae5019911a",
//       },
//     })
//     .then(function (res) {
//       // console.log(res.data.paging.total);
//       return res.data.response;

//       // console.log(response);
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
// }

var d = new Date().valueOf();
var epoch = d / 1000;
// console.log(epoch);

const dog = {
  name: "Man",
};
const fff = "P333";
const saveData = (JSONResp, fileN) => {
  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };
  fs.writeFile(
    "src/data/odds/Feb/" + fileN + ".json",
    JSON.stringify(JSONResp, null, 2),
    finished
  );
};

// saveData(dog, fff);

var axios = require("axios").default;
// const jsonConcat = require("json-concat");
// jsonConcat(
//   {
//     src: "./src/data/odds/",
//     dest: "./Rrresult.json",
//   },
//   function (json) {
//     console.log(json);
//   }
// );

// const context = require.context('./src/data/odds/Feb', true, /.json$/);
// const all = {};
// context.keys().forEach((key) => {
//   const fileName = key.replace('./', '');
//   const resource = require(`./src/data/odds/Feb/${fileName}`);
//   const namespace = fileName.replace('.json', '');
//   all[namespace] = JSON.parse(JSON.stringify(resource));

// });
// console.log(all)

// saveData(dog, fff);

const arrayFebF = [];

for (let i = 1; i < 13; i++) {
  console.log(i);
  // let statement =
  // "import OddsFeb" + i + "12 from ./odds/Feb/FebP" + i + "12.json";
  let statement = "...OddsFeb" + i + "12";
  arrayFebF.push(statement);
  // var axios = require("axios").default;

  // var options = {
  //   method: "GET",
  //   url: "https://api-football-v1.p.rapidapi.com/v3/odds",
  //   params: { date: "2022-02-12", page: i },
  //   headers: {
  //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "9b6ea5d6f4msh9a268c56b4223b5p117d78jsn85ae5019911a",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     // console.log(response.data);
  //     saveData(response.data.response, "FebP" + i + "12");
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  // const dated = "2022-02-"+i+";

  // let startDate = "2022-02-" + i;

  // var options = {
  //   method: "GET",
  //   url: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
  //   params: { date: startDate },
  //   headers: {
  //     "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  //     "x-rapidapi-key": "9b6ea5d6f4msh9a268c56b4223b5p117d78jsn85ae5019911a",
  //   },
  // };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);

  //     saveData(response.data.response, "Feb" + i);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
}

console.log(arrayFebF);

// var loop = new Date(formatDate(new Date()));
// while (loop <= new Date(new Date().setDate(new Date().getDate() + 1))) {
//   var newDate = loop.setDate(loop.getDate() + 1);
//   loop = new Date(newDate);

//   getOdds(formatDate(loop), 1);

//   // console.log(formatDate(loop));

//   console.log(getOdds(formatDate(loop), 1));

//   if (getOdds(formatDate(loop) > 1)) {
//     for (var i = 1; i < getOdds(loop, 1); i++) {
//       console.log(getOddsAll(formatDate(loop), i));
//       saveData(getOddsAll(formatDate(loop), i), i);
//     }
//   }
// }

// for (var i = 2; i < 10; i++) {
//   console.log(i);
// }

// console.log(new Date(new Date().setDate(new Date().getDate() + 7)));

// var start = new Date("02/06/2022");
// var end = new Date("31/06/2022");

// var loop = new Date(start);
// while (loop <= end) {
//   //   alert(loop);

//   var newDate = loop.setDate(loop.getDate() + 1);
//   loop = new Date(newDate);

//   console.log(formatDate(loop));
// }

// console.log(formatDate(new Date()));

// const dog = {
//   name: "Sam",
//   breed: "Sam",
// };

// saveData(dog);
