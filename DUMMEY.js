const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "https://source.unsplash.com/random/300×300",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "https://source.unsplash.com/random/300×301",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "https://source.unsplash.com/random/300×302",
    isFeatured: true,
  },
];

const callAsysnc = async () => {
  const res = await fetch(
    "https://event-next-d962d-default-rtdb.firebaseio.com/events.json"
  );
  const data = await res.json();
  let events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export async function getFeaturedEvents() {
  const d = await callAsysnc();
  return d.filter((event) => event.isFeatured);
}

export async function getAllEvents() {
  return await callAsysnc();
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const data = await callAsysnc();
  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export async function getEventById(id) {
  const dat = await callAsysnc();
  return dat.find((event) => event.id === id);
}
