import { Outlet } from "react-router-dom";

import EventsNavigation from "./EventsNavigation";

const EventsLayout = () => {
  return (
    <>
      <EventsNavigation /> <Outlet />
    </>
  );
};

export default EventsLayout;
