import "./teams.css";
import { FaRegChartBar } from "react-icons/fa";
import React, { useState } from "react";

function Teams({ matchDate, matchTime, fixture, odd, handleOdds, getbets }) {
  const [isActive, setIsActive] = useState(false);

  const [highLight, setHighLight] = useState(-1);

  const highLightOdd = (index) => {
    setHighLight(index);
  };
  // {toggleState === 1 ? "tabs active-tabs" : "tabs"}
  return (
    <div key={fixture.fixture.id}>
      <div className="columns">
        <div className="f_logo">
          {matchDate(fixture.fixture.timestamp)}{" "}
          {matchTime(fixture.fixture.timestamp)}
        </div>
        <div className="teams">
          {fixture.teams.home.name} - {fixture.teams.away.name}
        </div>
        <div className="stat">
          {" "}
          <FaRegChartBar />{" "}
        </div>
        <div className="game_id">
          {fixture.fixture.id}
          <span
            className="list_more_odds_btn"
            onClick={() => setIsActive(!isActive)}
          >
            87+
          </span>
        </div>

        {odd.bookmakers
          .filter((code) => code.id === 11)
          .map((bookmaker, bid) =>
            bookmaker.bets
              .filter((code) => code.id === 1)
              .map((bet) =>
                bet.values.map((value, vid) => (
                  <div
                    className="odd home_1"
                    onClick={handleOdds(
                      odd.fixture.timestamp,
                      odd.fixture.id,
                      odd.league.id,
                      bet.name,
                      value.value,
                      value.odd
                    )}
                    key={vid}
                  >
                    {value.odd}
                  </div>
                ))
              )
          )}

        {odd.bookmakers
          .filter((code) => code.id === 11)
          .map((bookmaker, bid) =>
            bookmaker.bets
              .filter((code) => code.id === 13)
              .map((bet) =>
                bet.values.map((value, vid) => (
                  <div
                    className="odd home_1"
                    key={vid}
                    onClick={handleOdds(
                      odd.fixture.timestamp,
                      odd.fixture.id,
                      odd.league.id,
                      bet.name,
                      value.value,
                      value.odd
                    )}
                  >
                    {value.odd}
                  </div>
                ))
              )
          )}

        {odd.bookmakers
          .filter((code) => code.id === 11)
          .map((bookmaker, bid) =>
            bookmaker.bets
              .filter((code) => code.id === 5)
              .map((bet) =>
                bet.values
                  .filter((code) => code.value === "Under 1.5")
                  .map((value, vid) => (
                    <div
                      className="odd under_15"
                      key={vid}
                      onClick={handleOdds(
                        odd.fixture.timestamp,
                        odd.fixture.id,
                        odd.league.id,
                        bet.name,
                        value.value,
                        value.odd
                      )}
                    >
                      {value.odd}
                    </div>
                  ))
              )
          )}

        {odd.bookmakers
          .filter((code) => code.id === 11)
          .map((bookmaker, bid) =>
            bookmaker.bets
              .filter((code) => code.id === 5)
              .map((bet) =>
                bet.values
                  .filter((code) => code.value === "Over 2.5")
                  .map((value, vid) => (
                    <div
                      className="odd over_25"
                      key={vid}
                      onClick={handleOdds(
                        odd.fixture.timestamp,
                        odd.fixture.id,
                        odd.league.id,
                        bet.name,
                        value.value,
                        value.odd
                      )}
                    >
                      {value.odd}
                    </div>
                  ))
              )
          )}
      </div>

      {isActive && (
        <div className="more_odds">
          {odd.bookmakers
            .filter((code) => code.id === 11)
            .map((bookmaker, bid) =>
              bookmaker.bets.map((bet, bbbid) => (
                <div key={bbbid}>
                  {getbets
                    .filter((code) => code.id === bet.id)
                    .map((betts, indexbets) => (
                      <div key={indexbets}>
                        <div className="odds_columns">
                          <div className="f_logo"></div>
                          <div className="odd_title">{bet.name}</div>
                        </div>

                        <div className="odds_columns">
                          <div className="f_logo"></div>
                          {bet.values.map((value, vid_more) => (
                            <div
                              className="odd odd_value"
                              // className={
                              //   highLight === vid_more
                              //     ? "odd oddSelected"
                              //     : "odd odd_value"
                              // }
                              data={vid_more}
                              key={vid_more}
                              onClick={handleOdds(
                                odd.fixture.timestamp,
                                odd.fixture.id,
                                odd.league.id,
                                bet.name,
                                value.value,
                                value.odd
                              )}
                            >
                              <span>{value.value}</span>{" "}
                              <span> {value.odd}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              ))
            )}
        </div>
      )}
    </div>
  );
}

export default Teams;
