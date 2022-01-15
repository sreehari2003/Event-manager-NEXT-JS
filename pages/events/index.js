import React from "react";
import { getAllEvents } from "../../DUMMEY";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { useRouter } from "next/router";
const Events = ({ data }) => {
  const router = useRouter();
  const findEvents = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <div>
      <EventSearch change={findEvents} />
      <EventList items={data} />
    </div>
  );
};
export default Events;

export const getStaticProps = async () => {
  const data = await getAllEvents();
  return {
    props: {
      data,
    },
  };
};
