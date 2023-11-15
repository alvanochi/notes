import { useRef, useState } from "react";

const AddNotes = ({ onAddNotes }) => {
  const [title, setTitle] = useState("");
  const [createdAt, setCreatedAt] = useState(null);
  const [body, setBody] = useState("");
  const [archived, setArchived] = useState(false);
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

  const handleChangeBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    setCreatedAt(currentDate);

    if (!title || title.trim() === "") return;
    const newItem = {
      id: Date.now(),
      title,
      archived,
      body,
      createdAt: showFormattedDate(currentDate),
    };

    console.log(newItem);
    onAddNotes(newItem);
    setTitle("");
    setBody("");
    setCreatedAt(null);
    setArchived(false);
  };

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
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
            value={body}
            onChange={handleChangeBody}
          />
        )}
      </form>
      <hr className="border border-slate-900" />
    </>
  );
};

export default AddNotes;
