import AddNotes from "../Elements/AddNotes";
import ListNotes from "../Elements/ListNotes";
import { useNotesContext } from "../Hooks/DataNotesContext";

const ShowNotes = () => {
  const { items, updateData } = useNotesContext();

  const handleDeleteItem = (id) => {
    updateData(items.filter((item) => item.id !== id));
    console.log(items);
  };

  const handleToggleArchived = (id) => {
    updateData((items) =>
      items.map((item) =>
        item.id === id ? { ...item, archived: !item.archived } : item
      )
    );
  };

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
                onDeleteItem={handleDeleteItem}
                onToggleArchived={handleToggleArchived}
              />
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
export default ShowNotes;
