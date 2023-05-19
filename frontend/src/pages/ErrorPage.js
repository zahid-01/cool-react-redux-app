import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const errorData = useRouteError();

  let title = "An error occured";
  let message;

  if (errorData.status === 500) {
    message = errorData.data;
  }
  if (errorData.status === 404) {
    title = "Page not found";
    message = "Could not find the resource page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;
