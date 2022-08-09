import React from "react";

import Event from "./Event";

import { events } from "./data";

function EventList({ events }) {
  return (
    <>
      {events.map((event, index) => {
        return <Event key={index} event={event} type={type}></Event>;
      })}
    </>
  );
}

export default function Projects() {
  return (
    <div id="article-section">
      <div className="d-flex flex-row flex-wrap all-events">
        <EventList
          events={events}
          id="events"
        ></EventList>
      </div>
    </div>
  );
}
