import React from "react";
import Tabs from "./Tabs/Tabs";

function Right({
  tickets,
  fixtureData,
  setIsPreviewTicketOpen,
  isPreviewTicketOpen,
  deleteTicket,
  deleteAllTickets,
  createTicket,
}) {
  return (
    <aside className="sidebar-second">
      <Tabs
        tickets={tickets}
        fixtureData={fixtureData}
        setIsPreviewTicketOpen={setIsPreviewTicketOpen}
        isPreviewTicketOpen={isPreviewTicketOpen}
        deleteTicket={deleteTicket}
        deleteAllTickets={deleteAllTickets}
        createTicket={createTicket}
      />
    </aside>
  );
}

export default Right;
