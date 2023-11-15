import AddNotes from "../Elements/AddNotes";
import ListNotes from "../Elements/ListNotes";
import { useNotesContext } from "../Hooks/DataNotesContext";

const ShowNotes = ({ onDeleteItem, onToggleArchived }) => {
  const { items, updateData } = useNotesContext();
  const handleAddNotes = (item) => {
    if (items.find((i) => i.title === item.title)) {
      const updateItems = items.map((i) => {
        return i;
      });
      updateData(updateItems);
    } else {
      updateData([...items, item]);
    }
  };
  return (
    <div className="flex justify-center w-full ">
      <div className="w-3/5">
        <AddNotes onAddNotes={handleAddNotes} />
        <ul>
          {items.length === 0 ? (
            <h1 className="mt-4 ml-4 font-semibold text-center text-red-500 font-Poppins">
              {" "}
              Tidak Ada Catatan{" "}
            </h1>
          ) : (
            items.map((item) => (
              <ListNotes
                key={item.id}
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleArchived={onToggleArchived}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
export default ShowNotes;
