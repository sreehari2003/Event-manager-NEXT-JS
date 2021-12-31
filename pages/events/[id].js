import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../DUMMEY";
import Error from "next/error";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = () => {
  const router = useRouter();
  const path = router.query.id;
  const event = getEventById(path);
  console.log(event);
  if (!event) {
    return <Error statusCode={404} />;
  } else {
    return (
      <>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAlt={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
    );
  }
};

export default EventDetailPage;
