import "./App.css";
import _ from "lodash";
import Header from "./components/Header/Header";
import React, { useState, useEffect } from "react";
import {
  getCountries,
  getFixtures,
  getOdds,
  getLeagues,
  getBets,
} from "./data";
import Main from "./components/Main/Main";
import { Link, Outlet } from "react-router-dom";
import LeftSidebar from "./components/Sidebars/Left/Left";
import RightSidebar from "./components/Sidebars/Right/Right";

import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

function App() {
  const ALL_TICKETS = localStorage.getItem("tickets")
    ? JSON.parse(localStorage.getItem("tickets"))
    : [];

  const FAV_COUNTRIES = localStorage.getItem("fav_countries")
    ? JSON.parse(localStorage.getItem("fav_countries"))
    : [];

  useEffect(() => {}, []);

  let countries = getCountries();
  let fixtureData = getFixtures();
  let OddData = getOdds();
  let getleagues = getLeagues();
  let getbets = getBets();

  // console.log(fixtureData.map((f) => f.fixture.timestamp));
  // console.log(new Date().valueOf() / 1000);
  // console.log(
  //   fixtureData
  //     .filter((ff) => ff.fixture.timestamp >= new Date().valueOf() / 1000)
  //     .map((f) => f.fixture.timestamp)
  // );

  const getLeaguesWithMatches = getleagues.filter((el) => {
    return OddData.some((f) => {
      return f.league.id === el.league.id;
    });
  });

  const myArrayFiltered = countries.filter((el) => {
    return getleagues.some((f) => {
      return OddData.some((fo) => {
        return (
          f.country.name === el.name &&
          fo.league.country === el.name &&
          fo.fixture.timestamp >= new Date().valueOf() / 1000
        );
      });

      // return f.country.name === el.name;
    });
  });

  const [tickets, setTickets] = useState(ALL_TICKETS);
  const [getcountry, setGetCountry] = useState(myArrayFiltered);
  const [theCountries, setTheCountries] = useState(myArrayFiltered);
  const [leagues, setLeagues] = useState(getLeaguesWithMatches);
  const [theLeagues, setTheLeagues] = useState(getLeaguesWithMatches);

  const [isPreviewTicketOpen, setIsPreviewTicketOpen] = useState(false);
  const [fixtureTimestamp, setFixtureTimestamp] = useState("");
  const [fixtureId, setFixtureId] = useState("");
  const [leagueId, setLeagueId] = useState("");
  const [oddName, setOddName] = useState("");
  const [oddValue, setOddValue] = useState("");
  const [odd, setOdd] = useState("");

  const handleOdds =
    (fixtureTimestamp, fixtureId, leagueId, oddName, oddValue, odd) => () => {
      // createTicket();
      setFixtureTimestamp(fixtureTimestamp);
      setFixtureId(fixtureId);
      setLeagueId(leagueId);
      setOddName(oddName);
      setOddValue(oddValue);
      setOdd(odd);
      const ticket = {
        fixtureTimestamp,
        fixtureId,
        leagueId,
        oddName,
        oddValue,
        odd,
      };

      let findFixture = tickets.find((fId) => fId.fixtureId === fixtureId);

      if (!findFixture) {
        setTickets([...tickets, ticket]);
      } else {
        let objIndex = tickets.findIndex((fId) => fId.fixtureId === fixtureId);
        tickets[objIndex].oddName = oddName;
        tickets[objIndex].oddValue = oddValue;
        tickets[objIndex].odd = odd;
        localStorage.setItem("tickets", JSON.stringify(tickets));
        // window.location.reload(false);
      }
    };

  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  function matchDate(timestamp) {
    let mD = new Date(timestamp * 1000),
      month = "" + (mD.getMonth() + 1),
      day = "" + mD.getDate(),
      year = mD.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return (
      day + "." + month
      // mD.getDate() + "." + (mD.getMonth() === 0 ? "1" : mD.getMonth()) + "."
    );
  }

  function matchTime(timestamp) {
    let mT = new Date(timestamp * 1000),
      hour = "" + mT.getHours(),
      mininute = mT.getMinutes();

    if (hour.length < 2) hour = "0" + hour;
    if (mininute.length <= 2) mininute = "0" + mininute;

    return hour + ":" + mT.getMinutes();
  }

  const filterC = (fid) => {
    const newC = countries.filter((newVal) => {
      return newVal.name === fid;
    });
    setGetCountry(newC);
  };

  // const filterLeague = (l_id, c_id) => {
  //   console.log(l_id, c_id);
  //   const selectedLeague = leagues.filter((leagueValue) => {
  //     console.log(leagueValue.league.id);
  //     return leagueValue.league.id === l_id;
  //   });

  //   setLeagues(selectedLeague);
  //   console.log(leagues);
  //   const theC = countries.filter((newVal) => {
  //     return newVal.name === c_id;
  //   });
  //   setGetCountry(theC);
  // };
  // // console.log(getcountry);
  // // console.log(leagues);

  const filterLeague = (l_id, c_id) => {
    console.log("Iam clicked");
    // const getC = getcountry.filter((el) => {
    //   return leagues.some((f) => {
    //     return f.league.id === l_id && el.name === c_id;
    //   });
    // });

    const getC = getcountry.filter((c_name) => {
      return c_name.name === c_id;
    });

    const getL = leagues.filter((ll) => {
      return ll.league.id === l_id;
    });
  };

  const [checkedState, setCheckedState] = useState(
    new Array(getcountry.length).fill(getcountry.id)
  );

  const [storeCountries, setStoreCountries] = useState([]);

  const handleOnChange = (country_id) => {
    const countryId = { country_id };
    let check_country = storeCountries.find(
      (c_id) => c_id.country_id === country_id
    );
    if (!check_country) {
      setStoreCountries([...storeCountries, countryId]);
    } else {
      storeCountries.splice(country_id.country_id, 1);
      setStoreCountries(storeCountries);
    }
  };

  const deleteTicket = (fixtureId) => {
    console.log(fixtureId);

    // let index;
    // for (let i = 0; i < tickets.length; i++) {
    //   if (tickets[i] === fixtureId) {
    //     index = i;
    //   }
    // }

    // if (index === undefined) return;

    // tickets.splice(index, 1);

    // localStorage.setItem("tickets", JSON.stringify(tickets));

    for (let i in tickets) {
      if (tickets[i].fixtureId === fixtureId) {
        console.log("Yes");
        // tickets.splice(i, 1);
        if (tickets.splice(i, 1)) {
          console.log("Deleted!");
          console.log(i);
        }
        // setTickets([...tickets, tickets.splice(i, 1)]);
        // tickets[i].odd --;

        // if (tickets[i].count === 0) {
        //   console.log("Yes 0");
        //   tickets.splice(i, 1);
        // }
        setTickets(tickets);
        break;
      }
    }
  };

  const deleteAllTickets = () => {
    localStorage.removeItem("tickets");
    setTickets([]);
  };

  const totalOdds = tickets.reduce((accumulator, currentValue) => {
    return (accumulator += parseFloat(currentValue.odd));
  }, 0);

  const ticket_number = Math.floor(Math.random() * 500000000) + 100000000;

  function createTicket() {
    console.log("sas");
    axios({
      method: "POST",
      url: "/api/tickets/",
      data: {
        ticket_number: ticket_number,
        stake: 1000,
        total_odds: parseFloat(totalOdds).toFixed(3),
        status: "PENDING",
        user: 1,
      },
    }).then((response) => {
      console.log("The Ticket was Submitted!");
      for (let i = 0; i < tickets.length; i++) {
        axios({
          method: "POST",
          url: "/api/ticket_items/",
          data: {
            ticket: ticket_number,
            fixture_timestamp: tickets[i].fixtureTimestamp,
            fixture_id: tickets[i].fixtureId,
            league_id: tickets[i].leagueId,
            odd_name: tickets[i].oddName,
            odd_value: tickets[i].oddValue,
            odd: tickets[i].odd,
          },
        }).then((response) => {
          console.log("The Ticket Items was Submitted!");
          setTickets([]);
        });
      }
    });
  }

  return (
    <div className="App">
      <Header />
      <Outlet />

      <div className="main-content content">
        <div className="columns">
          <Main
            setIsPreviewTicketOpen={setIsPreviewTicketOpen}
            isPreviewTicketOpen={isPreviewTicketOpen}
            tickets={tickets}
            getcountry={getcountry}
            OddData={OddData}
            fixtureData={fixtureData}
            leagues={leagues}
            matchDate={matchDate}
            matchTime={matchTime}
            handleOdds={handleOdds}
            getbets={getbets}
          />
          <LeftSidebar
            countries={theCountries}
            leagues={theLeagues}
            OddData={OddData}
            fixtureData={fixtureData}
            filterC={filterC}
            matchDate={matchDate}
            matchTime={matchTime}
            handleOdds={handleOdds}
            checkedState={checkedState}
            handleOnChange={handleOnChange}
            filterLeague={filterLeague}
          />
          <RightSidebar
            tickets={tickets}
            fixtureData={fixtureData}
            setIsPreviewTicketOpen={setIsPreviewTicketOpen}
            isPreviewTicketOpen={isPreviewTicketOpen}
            deleteTicket={deleteTicket}
            deleteAllTickets={deleteAllTickets}
            createTicket={createTicket}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
