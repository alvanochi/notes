import { useState } from "react";
import { useNotesContext } from "../Hooks/DataNotesContext";

const Footer = () => {
  const [sortBy, setSortBy] = useState("All");
  const { setFilter } = useNotesContext();

  const handleSort = (sortType) => {
    setSortBy(sortType);
    setFilter(sortType);
  };

  return (
    <div className="flex justify-center gap-8 mt-6 items-center">
      <button
        onClick={() => handleSort("All")}
        className={`font-Poppins text-base ${
          sortBy === "All" ? "text-orange-400" : ""
        }`}
      >
        All
      </button>
      <button
        onClick={() => handleSort("Completed")}
        className={`font-Poppins text-base ${
          sortBy === "Completed" ? "text-orange-400" : ""
        }`}
      >
        Completed
      </button>
      <button
        onClick={() => handleSort("Pending")}
        className={`font-Poppins text-base ${
          sortBy === "Pending" ? "text-orange-400" : ""
        }`}
      >
        Pending
      </button>
    </div>
  );
};

export default Footer;
