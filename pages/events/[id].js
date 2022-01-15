import React from "react";
import { getEventById } from "../../DUMMEY";
import Error from "next/error";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailPage = ({ data }) => {
  if (!data) {
    return (
      <div className="wrapper">
        <h1 className="center">LOADING.....</h1>
      </div>
    );
  } else {
    return (
      <>
        <EventSummary title={data.title} />
        <EventLogistics
          date={data.date}
          address={data.location}
          image={data.image}
          imageAlt={data.title}
        />
        <EventContent>
          <p>{data.description}</p>
        </EventContent>
      </>
    );
  }
};

export default EventDetailPage;

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const id = params.id;
  const data = await getEventById(id);

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};

//just an example

export const getStaticPaths = async () => {
  return {
    fallback: true,
    paths: [
      {
        params: {
          id: "/events/e1",
        },
      },
      {
        params: {
          id: "events/e2",
        },
      },
    ],
  };
};
