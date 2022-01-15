import React from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../DUMMEY";
import EventList from "../../components/events/EventList";

const FilterdEventPage = ({ filteredEvents }) => {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <h1 className="center px py ">Loading....</h1>;
  }
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

export const getServerSideProps = async (ctx) => {
  const filterData = ctx.params.slug;
  const year = +filterData[0];
  const month = +filterData[1];
  if (isNaN(month) || isNaN(year) || month > 12 || year > 2030) {
    return {
      notFound: true,
    };
  }
  const val = await getFilteredEvents({ year, month });
  if (!val) return { notFound: true };
  return {
    props: { filteredEvents: val },
  };
};

// export const getStaticPaths = async (ctx) => {
//   return {
//     fallback: true,
//     paths: [{ params: { slug: "/events/2021/1" } }],
//   };
// };
