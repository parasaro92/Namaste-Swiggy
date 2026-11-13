import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
	console.log(error);
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
			<h3>{error.statusText || error.message}</h3>
    </div>
  );
}

export default Error;