import { useRef, useState } from "react";

const AddNotes = ({ onAddNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [checked, setChecked] = useState(false);
  const [showSecondInput, setShowSecondInput] = useState(false);
  const inputRef = useRef();

  const handleRefFocus = () => {
    inputRef.current.focus();
    setShowSecondInput(true);
  };

  const handleTitleFocus = () => {
    setShowSecondInput(true);
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeNote = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || title.trim() === "") return;
    const newItem = {
      id: Date.now(),
      title,
      checked,
      note,
    };
    onAddNotes(newItem);
    setTitle("");
    setNote("");
    setChecked(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button
          onClick={handleRefFocus}
          className="mr-3 text-3xl font-semibold"
          type="submit"
        >
          +
        </button>
        <input
          type="text"
          className="py-1 outline-none"
          placeholder="Judul"
          value={title}
          onChange={handleChangeTitle}
          onFocus={handleTitleFocus}
          ref={inputRef}
        />
        {showSecondInput && (
          <input
            type="text"
            className="py-1 ml-8 outline-none"
            placeholder="Buat catatan..."
            value={note}
            onChange={handleChangeNote}
          />
        )}
      </form>
      <hr className="border border-slate-900" />
    </>
  );
};

export default AddNotes;
