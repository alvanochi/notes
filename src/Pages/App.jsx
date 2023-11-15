import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import ShowNotes from "../Fragments/ShowNotes";
import { useNotesContext } from "../Hooks/DataNotesContext";

export default function App() {
  const { items, updateData } = useNotesContext();

  const handleDeleteItem = (id) => {
    updateData(items.filter((item) => item.id !== id));
  };

  const handleToggleCheck = (id) => {
    updateData((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-2/5 pt-5 pb-10 shadow-lg shadow-slate-200">
        <Header />
        <ShowNotes
          onDeleteItem={handleDeleteItem}
          onToggleCheck={handleToggleCheck}
        />
        <Footer />
      </div>
    </div>
  );
}
