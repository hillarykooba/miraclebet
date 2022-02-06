import "./left.css";
import React, { useState, useEffect, useContext } from "react";

function LeftSidebar({
  countries,
  leagues,
  OddData,
  fixtureData,
  filterC,
  matchDate,
  matchTime,
  handleOdds,
  checkedState,
  handleOnChange,
  filterLeague,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <aside className="sidebar-first">
      <div className="accordion-top-bets">
        <div className="accordion-top-bets-item">
          <div
            className="accordion-top-bets-title"
            onClick={() => setIsActive(!isActive)}
          >
            <div>Countries</div>
            <div>{isActive ? "-" : "+"}</div>
          </div>
          {isActive && (
            <div className="accordion-top-bets-content">
              <div className="accordion-top-bets">
                <div className="accordion-top-bets-item">
                  <div
                    className="accordion-top-bets-title difc"
                    // onClick={() => filterC(country.name)}
                  >
                    <div>
                      <img
                        width={15}
                        height={15}
                        // src={country.image_path}
                        alt=""
                      />
                      <span>All</span>
                    </div>
                  </div>
                </div>
              </div>
              {countries.map((country) => (
                <div key={country.id}>
                  <div className="accordion-top-bets">
                    <div className="accordion-top-bets-item">
                      <div
                        className="accordion-top-bets-title difc"
                        onClick={() => filterC(country.name)}
                      >
                        <div>
                          <img
                            width={15}
                            height={15}
                            src={country.image_path}
                            alt=""
                          />
                          <span>{country.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div>
        <span className="left__heading">POPULAR LEAGUES</span>
        {leagues.slice(0, 7).map((league, did) => (
          <div key={did}>
            <div
              className="accordion-top-bets"
              onClick={() => filterC(league.country.name)}
            >
              <div className="accordion-top-bets-item">
                <div className="accordion-top-bets-title difc">
                  <div key={league.league.id}>
                    <img
                      width={15}
                      height={15}
                      src={league.league.logo}
                      alt=""
                    />
                    <span>
                      {league.country.name} {league.league.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <span className="left__heading">TOP MATCHES</span>
        {OddData.slice(0, 5).map((odd, index) => (
          <div key={index}>
            <div className="top_matches" key={index}>
              <span className="top_match_title">
                {odd.league.country}. {odd.league.name}
              </span>
              {fixtureData
                .filter((code) => code.fixture.id === odd.fixture.id)
                .map((fixture) => (
                  <div key={fixture.fixture.id}>
                    <div className="top_match_teams">
                      <span>
                        <img
                          width={15}
                          height={15}
                          src={fixture.teams.home.logo}
                          alt=""
                        />
                        {fixture.teams.home.name}
                      </span>
                      <span>
                        <span className="top_match_time">
                          {matchDate(fixture.fixture.timestamp)}
                        </span>
                      </span>
                    </div>
                    <div className="top_match_teams">
                      <span>
                        <img
                          width={15}
                          height={15}
                          src={fixture.teams.away.logo}
                          alt=""
                        />
                        {fixture.teams.away.name}
                      </span>
                      <span>
                        <span className="top_match_time">
                          {matchTime(fixture.fixture.timestamp)}
                        </span>
                      </span>
                    </div>
                  </div>
                ))}
            </div>
            {odd.bookmakers
              .filter((code) => code.id === 11)
              .map((bookmaker, bid) => (
                <div className="top_match_odds" key={bid}>
                  {bookmaker.bets
                    .filter((code) => code.id === 1)
                    .map((bet) =>
                      bet.values.map((value, vid) => (
                        <div
                          key={vid}
                          className="top_match_odd h1"
                          onClick={handleOdds(
                            odd.fixture.timestamp,
                            odd.fixture.id,
                            odd.league.id,
                            bet.name,
                            value.value,
                            value.odd
                          )}
                        >
                          <span>{value.value}</span>
                          <span>{value.odd}</span>
                        </div>
                      ))
                    )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default LeftSidebar;
