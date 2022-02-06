import "./main.css";
import Filter from "./Filter/Filter";
import React, { useState } from "react";
import MainSlider from "./MainSlider/MainSlider";
import Teams from "./Teams/Teams";

function Main({
  getcountry,
  OddData,
  fixtureData,
  leagues,
  matchDate,
  matchTime,
  handleOdds,
  getbets,
}) {
  return (
    <main className="main">
      <Filter />

      <div className="main-area">
        <MainSlider
          OddData={OddData}
          fixtureData={fixtureData}
          matchDate={matchDate}
          matchTime={matchTime}
          handleOdds={handleOdds}
        />
        <div>
          <div className="accordion">
            {getcountry.map((country) => (
              <div className="accordion-item" key={country.id}>
                <div className="accordion-title">
                  <div>
                    <div className="difc">
                      <img
                        width={20}
                        height={20}
                        src={country.image_path}
                        alt=""
                      />{" "}
                      <span>{country.name}</span>
                    </div>
                  </div>
                </div>
                <div className="accordion-content">
                  {leagues
                    .filter((c_code) => c_code.country.name === country.name)
                    .map((league, lid) => (
                      <div key={lid}>
                        <div>
                          <div className="columns">
                            <div className="f_logo"></div>
                            <div className="league">
                              <img
                                width={15}
                                height={15}
                                src={league.league.logo}
                                alt=""
                              />{" "}
                              <span className="league__country">
                                {country.name}
                              </span>{" "}
                              {league.league.name}
                            </div>
                            <div className="home_1">1</div>
                            <div className="draw">X</div>
                            <div className="home_2">2</div>

                            <div className="home_1x">1X</div>
                            <div className="x2">X2</div>
                            <div className="home_12">12</div>

                            <div className="under_15">Under 1.5</div>
                            <div className="over_25">Over 2.5</div>
                          </div>
                        </div>

                        {OddData.filter(
                          (l_league) => l_league.league.id === league.league.id
                        ).map((odd) =>
                          fixtureData
                            .filter(
                              (code) => code.fixture.id === odd.fixture.id
                            )
                            .map((fixture, ffid) => (
                              <Teams
                                matchDate={matchDate}
                                matchTime={matchTime}
                                fixture={fixture}
                                odd={odd}
                                handleOdds={handleOdds}
                                getbets={getbets}
                              />
                            ))
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
