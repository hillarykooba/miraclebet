import React, { useState, useEffect, useContext } from "react";
import "./tabs.css";
import { FaRegTrashAlt, FaWindowClose } from "react-icons/fa";
import Modal from "../../../Modal/Modal";
import Modal2 from "../../../Modal/Modal2";
import Stake from "../../../Stake/Stake";
import { ReactDimmer } from "react-dimmer";

import { createStore } from "redux";
import counter from "../../../../reducers";

function Tabs({
  tickets,
  fixtureData,
  setIsPreviewTicketOpen,
  isPreviewTicketOpen,
  deleteTicket,
  deleteAllTickets,
  createTicket,
}) {
  const [isModalOpen, setModal] = useState(false);

  const handleClick = () => {
    setModal((prevState) => !prevState);
  };

  const store = createStore(counter);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="ticket">
      {isModalOpen && <Modal2 closeModal={setModal} />}

      <ReactDimmer
        isOpen={isModalOpen}
        exitDimmer={setModal}
        zIndex={100}
        blur={1.5}
      />
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Bet Slips {tickets ? tickets.length : ""}
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          My Bets
        </button>
        <button className="tabs" onClick={deleteAllTickets}>
          <FaRegTrashAlt />
        </button>
      </div>

      <div className="contents-tabs">
        <div
          className={
            toggleState === 1 ? "contents  active-contents" : "contents"
          }
        >
          <div className="contentsFixedTop">
            {tickets
              ? tickets.map((bets) =>
                  fixtureData
                    .filter((code) => code.fixture.id === bets.fixtureId)
                    .map((fixture, index) => (
                      <div className="selected_odds" key={fixture.fixture.id}>
                        <div className="selected_odds__title">
                          <span>
                            <div className="difc">
                              <img
                                width={15}
                                height={15}
                                src={fixture.league.logo}
                                alt=""
                              />
                              <span>
                                {fixture.fixture.id} {fixture.league.country}{" "}
                                {fixture.league.name}
                              </span>
                            </div>
                          </span>
                          <span
                            onClick={() => deleteTicket(fixture.fixture.id)}
                          >
                            <FaWindowClose className="delete_ticket" />
                          </span>
                        </div>

                        <div className="selected_odds__theteams">
                          <div className="difc ticket-teams">
                            <img
                              width={15}
                              height={15}
                              src={fixture.teams.home.logo}
                              alt=""
                            />
                            <span>{fixture.teams.home.name}</span>
                          </div>
                          <div className="difc">
                            <span>-</span>
                          </div>
                          <div className="difc ticket-teams">
                            <img
                              width={15}
                              height={15}
                              src={fixture.teams.away.logo}
                              alt=""
                            />
                            <span>{fixture.teams.away.name}</span>
                          </div>
                        </div>

                        <div className="selected_oods__odd">
                          <span>
                            {bets.oddName} - {bets.oddValue}
                          </span>
                          <span className="selected_o_o">{bets.odd}</span>
                        </div>
                      </div>
                    ))
                )
              : "LEAB"}
          </div>

          <div className="contentsFixedBottom">
            <div className="selected_odds__total_odds">
              <span>TOTAL ODDS:</span>
              <span>
                {tickets
                  ? tickets.reduce((accumulator, currentValue) => {
                      return (accumulator += parseFloat(currentValue.odd));
                    }, 0)
                  : "0"}
              </span>
            </div>

            <div className="selected_odds__total_odds">
              <span>POTENTIAL WINNINGS: </span>
              <span>
                {tickets.reduce((accumulator, currentValue) => {
                  return (accumulator += parseFloat(currentValue.odd) * 10000);
                }, 0)}
                SSP
              </span>
            </div>

            <Stake
              value={store.getState()}
              onIncrement={() => store.dispatch({ type: "INCREMENT" })}
              onDecrement={() => store.dispatch({ type: "DECREMENT" })}
            />

            <div className="register">
              <button onClick={handleClick}>REGISTRATION</button>
            </div>

            <div className="selected_odds__amount_buttons">
              <button onClick={() => setIsPreviewTicketOpen(true)}>
                PREVIEW TICKET
              </button>
              {isPreviewTicketOpen && (
                <Modal
                  fixtureData={fixtureData}
                  tickets={tickets}
                  setIsPreviewTicketOpen={setIsPreviewTicketOpen}
                />
              )}
              <button>SAVE TICKET</button>
            </div>

            <div className="place_bet" onClick={createTicket}>
              <button>PLACE BET</button>
            </div>
          </div>
        </div>

        <div
          className={
            toggleState === 2 ? "contents  active-contents" : "contents"
          }
        >
          <div className="myBets">
            <div className="register">
              <button>REGISTRATION</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
