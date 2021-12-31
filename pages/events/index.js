import React from "react";
import { getAllEvents } from "../../DUMMEY";
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { useRouter } from "next/router";
const Events = () => {
  const router = useRouter();
  const events = getAllEvents();
  const findEvents = (year, month) => {
    const path = `/events/${year}/${month}`;
    router.push(path);
  };
  return (
    <div>
      <EventSearch change={findEvents} />
      <EventList items={events} />
    </div>
  );
};
export default Events;
