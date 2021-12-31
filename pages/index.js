import React from "react";
import { getFeaturedEvents } from "../DUMMEY";
import EventList from "../components/events/EventList";
const Home = () => {
  const DATA = getFeaturedEvents();
  return (
    <div>
      <EventList items={DATA} />
    </div>
  );
};

export default Home;
