import React from "react";
import EventItem from "./EventItem";
import classes from "../styles/event-list.module.css";
const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((el) => (
        <EventItem key={Math.random()} values={el} />
      ))}
    </ul>
  );
};

export default EventList;
