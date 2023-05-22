import axios from "axios";
import { json, redirect, useRouteLoaderData } from "react-router-dom";

import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const { data } = useRouteLoaderData("parent-loader");
  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export const loader = async (req) => {
  const id = req.params.someId;
  const details = await axios({
    method: "get",
    url: `http://localhost:8080/events/${id}`,
  });
  if (details.statusText !== "OK")
    throw json("Failed to retrieve data", { status: 500 });
  return details;
};

export const deleteAction = async ({ params, request }) => {
  const res = await axios({
    method: request.method,
    url: `http://localhost:8080/events/${params.someId}`,
  });

  if (res.statusText !== "OK")
    throw json("Failed to retrieve data", { status: 500 });
  return redirect("/events");
};
