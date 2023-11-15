import AddNotes from "../Elements/AddNotes";
import ListNotes from "../Elements/ListNotes";
import { useNotesContext } from "../Hooks/DataNotesContext";

const ShowNotes = ({ onDeleteItem, onToggleCheck }) => {
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
          {items.map((item) => (
            <ListNotes
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onToggleCheck={onToggleCheck}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ShowNotes;
