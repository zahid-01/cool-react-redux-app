import { json, useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) return <p>Failed to load data</p>;
  return <EventsList events={data} />;
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return { isError: true, message: "Could not fetch the results" };
    // throw new Response(
    //   { statusText: "Could not fetch results" },
    //   { status: 500, statusText: "Fetching results failed" }
    // );
    // throw new Error("There was a terible error");
    throw json("Failed to retrieve data", { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
};
