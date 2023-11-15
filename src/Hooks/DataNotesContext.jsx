import { createContext, useContext, useState } from "react";

const dataNotes = [
  {
    id: 1,
    title: "Submission Dicoding React",
    note: "Saya menggunakan Functional Component dan TailwindCSS untuk membuat project ini",
    checked: true,
  },
  {
    id: 2,
    title: "Catatan baru",
    note: "lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet",
    checked: false,
  },
  {
    id: 3,
    title: "Email dan Password Alvano",
    note: "Password untuk segala email yang terdaftar di Alvano adalah 12345678",
    checked: false,
  },
];

const AllNotes = createContext();
export default function AllNotesContextProvider({ children }) {
  const [items, setItems] = useState(dataNotes);
  const [filter, setFilter] = useState("All");

  const setFilterType = (filterType) => {
    setFilter(filterType);
  };

  const filteredItems = items.filter((item) => {
    if (filter === "All") {
      return true;
    } else if (filter === "Completed") {
      return item.checked;
    } else if (filter === "Pending") {
      return !item.checked;
    }
    return true;
  });
  const updateData = (newData) => {
    setItems(newData);
  };

  return (
    <AllNotes.Provider
      value={{ items: filteredItems, setFilter: setFilterType, updateData }}
    >
      {children}
    </AllNotes.Provider>
  );
}

export const useNotesContext = () => useContext(AllNotes);
