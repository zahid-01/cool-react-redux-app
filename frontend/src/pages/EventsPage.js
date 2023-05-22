import { json, useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  if (data.isError) return <p>Failed to load data</p>;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={data.events}>
        {(e) => {
          console.log(e);
          return <EventsList events={e} />;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

const loadedData = async () => {
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

export const loader = async () => {
  return defer({
    events: loadedData(),
  });
};
