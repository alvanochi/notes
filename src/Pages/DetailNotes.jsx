import { useParams } from "react-router-dom";
import { useNotesContext } from "../Hooks/DataNotesContext";
import ErrorPage from "./ErrorPage";

const DetailNotes = () => {
  const { items } = useNotesContext();
  const { id } = useParams();
  const item = items.find((p) => p.id === parseInt(id, 10));

  if (!item) {
    return <ErrorPage />;
  }

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  const formattedDate = showFormattedDate(item.createdAt);

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
          {formattedDate}
        </p>
      </div>
    </div>
  );
};

export default DetailNotes;
