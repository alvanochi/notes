import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="my-3 text-xl font-medium">
        The page you are looking for might is temporarily unavailable
      </p>
      <Link to="/">
        <button className="px-4 py-2 font-bold text-white bg-orange-400 rounded-full hover:bg-orange-600">
          GO TO HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
