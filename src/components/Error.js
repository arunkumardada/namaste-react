import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error OOPS!!! </h1>
      <h1>Something Went Wrong !!! </h1>
      <h2>
        {err.status}:{err.statusText}
      </h2>
    </div>
  );
};

export default Error;
