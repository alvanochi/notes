import { useState } from "react";
import { useNotesContext } from "../Hooks/DataNotesContext";

const Footer = () => {
  const [sortBy, setSortBy] = useState("Active");
  const { setFilter } = useNotesContext();

  const handleSort = (sortType) => {
    setSortBy(sortType);
    setFilter(sortType);
  };

  return (
    <div className="flex items-center justify-center gap-8 mt-6">
      <button
        onClick={() => handleSort("Active")}
        className={`font-Poppins text-base ${
          sortBy === "Active" ? "text-orange-400" : ""
        }`}
      >
        Active
      </button>
      <button
        onClick={() => handleSort("Archived")}
        className={`font-Poppins text-base ${
          sortBy === "Archived" ? "text-orange-400" : ""
        }`}
      >
        Archived
      </button>
      <button
        onClick={() => handleSort("All")}
        className={`font-Poppins text-base ${
          sortBy === "All" ? "text-orange-400" : ""
        }`}
      >
        All
      </button>
    </div>
  );
};

export default Footer;
