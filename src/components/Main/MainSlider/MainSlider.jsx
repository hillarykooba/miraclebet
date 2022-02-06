import "./main_slider.css";

function MainSlider({
  OddData,
  fixtureData,
  matchDate,
  matchTime,
  handleOdds,
}) {
  return (
    <div className="main_slider__container">
      {OddData.slice(0, 4).map((odd, index) => (
        <div className="main_slider" key={index}>
          <div className="main_slider__league difc">
            <img width={20} height={20} src={odd.league.logo} alt="" />{" "}
            <span>
              {odd.league.country}. {odd.league.name}
            </span>
          </div>

          {fixtureData
            .filter((code) => code.fixture.id === odd.fixture.id)
            .map((fixture, fid) => (
              <div key={fid}>
                <div className="main_slider__match_date">
                  <span>Match Starts</span>
                  <span className="main_slider__match_date_time">
                    {matchDate(fixture.fixture.timestamp)}{" "}
                    {matchTime(fixture.fixture.timestamp)}
                  </span>
                </div>

                <div className="main_slider__match_teams">
                  <div className="main_slider__match_teams_home">
                    {" "}
                    <img
                      width={40}
                      height={40}
                      src={fixture.teams.home.logo}
                      alt=""
                    />{" "}
                    <span>{fixture.teams.home.name}</span>
                  </div>
                  <div className="main_slider__match_teams_home">
                    {" "}
                    <span>{fixture.teams.away.name}</span>{" "}
                    <img
                      width={40}
                      height={40}
                      src={fixture.teams.away.logo}
                      alt=""
                    />{" "}
                  </div>
                </div>
              </div>
            ))}

          <div className="main_slider__odd_type">
            <span>1X2</span>
            <span>1/4</span>
          </div>
          {odd.bookmakers
            .filter((code) => code.id === 11)
            .map((bookmaker, bid) => (
              <div className="main_slider__odds" key={bid}>
                {bookmaker.bets
                  .filter((code) => code.id === 1)
                  .map((bet) =>
                    bet.values.map((value, vid) => (
                      <div
                        className="main_slider__odd"
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
  );
}

export default MainSlider;
