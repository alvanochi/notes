import { useParams } from "react-router-dom";
import { useNotesContext } from "../Hooks/DataNotesContext";
import ErrorPage from "./404";

const DetailNotes = () => {
  const { items } = useNotesContext();
  const { id } = useParams();
  const item = items.find((p) => p.id === parseInt(id, 10));
  if (!item) {
    return <ErrorPage />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-2/5 h-64 border border-orange-400 rounded-md">
        <h1 className="mx-4 mt-4 text-xl font-semibold font-Poppins">
          {item.title}
        </h1>
        <p className="mx-4 mt-4 text-base break-words font-Poppins">
          {item.body}
        </p>
        <p className="mx-4 mt-12 text-base break-words text-end font-Poppins">
          {item.createdAt}
        </p>
      </div>
    </div>
  );
};

export default DetailNotes;
