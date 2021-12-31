import React from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../DUMMEY";
import EventList from "../../components/events/EventList";

const FilterdEventPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <h1 className="center">Loading....</h1>;
  }
  const year = +filterData[0];
  const month = +filterData[1];

  if (isNaN(year) || isNaN(month)) {
    return <Error statusCode={500} />;
  }
  const filteredEvents = getFilteredEvents({ year, month });

  if (!filteredEvents || filteredEvents.length === 0) {
    return <h2 className="center">no data found</h2>;
  }
  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilterdEventPage;
