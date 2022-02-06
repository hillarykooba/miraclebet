import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ fixtureData, tickets, setIsPreviewTicketOpen }) => {
  return (
    <>
      <div
        className={styles.darkBG}
        onClick={() => setIsPreviewTicketOpen(false)}
      />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>TICKET PREVIEW</h5>
          </div>
          <button
            className={styles.closeBtn}
            onClick={() => setIsPreviewTicketOpen(false)}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <div className={styles.modal_top_header}>
              <span>DETAILS</span>
              <span>ODDS</span>
            </div>
            {tickets.map((ticket, index) =>
              fixtureData
                .filter((code) => code.fixture.id === ticket.fixtureId)
                .map((fixture, index) => (
                  <div className={styles.the_ticket_odd} key={index}>
                    <span>
                      SOCCER - {fixture.league.country}
                      {fixture.league.name}
                    </span>
                    <div className={styles.the_player_teams}>
                      <span>{ticket.fixtureId}</span>
                      <span className={styles.the_player_teams_players}>
                        {fixture.teams.home.name} - {fixture.teams.away.name}
                      </span>
                    </div>

                    <div className={styles.the_player_teams_odd}>
                      <span></span>
                      <span className={styles.the_player_teams_odd_players}>
                        <span
                          className={
                            styles.the_player_teams_odd_players_oddname
                          }
                        >
                          {ticket.oddName}
                        </span>
                        <div
                          className={styles.the_player_teams_odd_players_odd}
                        >
                          <span>{ticket.oddValue}</span>
                          <span>{ticket.odd}</span>
                        </div>
                      </span>
                    </div>

                    <div className={styles.the_player_teams_odd}>
                      <span></span>
                      <span className={styles.the_player_teams_odd_players}>
                        <span
                          className={
                            styles.the_player_teams_odd_players_oddname
                          }
                        >
                          Start At:{" "}
                          <span
                            className={styles.the_player_teams_odd_players_date}
                          >
                            Jan 30, 2022 16:30
                          </span>
                        </span>
                      </span>
                    </div>
                  </div>
                ))
            )}
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
