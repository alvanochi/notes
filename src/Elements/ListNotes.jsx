import { Link } from "react-router-dom";

const ListNotes = ({ item, onDeleteItem, onToggleCheck }) => {
  return (
    <>
      <li key={item.id}>
        <label className="checkbox-container ">
          <input
            type="checkbox"
            className="hidden"
            checked={item.checked}
            onChange={() => onToggleCheck(item.id)}
          />
          <span className="checkmark"></span>
        </label>
        <div className="relative left-8 bottom-1">
          <Link to={`/notes/${item.id}`}>
            <span
              className="font-Poppins"
              style={item.checked ? { textDecoration: "line-through" } : {}}
            >
              {item.title.substring(0, 30)}
            </span>
          </Link>
          <button
            className="ml-2 text-xl font-bold text-red-500 "
            onClick={() => onDeleteItem(item.id)}
          >
            &times;
          </button>
        </div>
      </li>
      <hr />
    </>
  );
};

export default ListNotes;
