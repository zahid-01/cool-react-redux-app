import axios from "axios";
import EventForm from "../components/EventForm";

const NewEventPage = () => {
  return <EventForm />;
};

export default NewEventPage;

export const addEvent = async ({ request, params }) => {
  const data = await request.formData();
  const formData = {
    title: data.get("title"),
    date: data.get("date"),
    image: data.get("image"),
    description: data.get("description"),
  };

  await axios({
    url: "http://localhost:8080/events",
    method: "POST",
    data: formData,
  });
};
