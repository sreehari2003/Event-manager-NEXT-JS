import React from "react";
import { getFeaturedEvents } from "../DUMMEY";
import EventList from "../components/events/EventList";
const Home = ({ DATA }) => {
  return (
    <div>
      <EventList items={DATA} />
    </div>
  );
};

export default Home;
export const getStaticProps = async () => {
  const DATA = await getFeaturedEvents();
  return {
    props: {
      DATA,
    },
  };
};
