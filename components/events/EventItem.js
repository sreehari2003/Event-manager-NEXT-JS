import React from "react";
import classes from "../styles/event-item.module.css";
import Button from "../ui/Button";
const EventItem = ({ values }) => {
  const { image, id, title, description, location, date, isFeatured } = values;
  const humanReadabledate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadabledate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>View more</Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
