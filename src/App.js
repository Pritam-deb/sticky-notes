import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { useState } from "react";
import { nanoid } from "nanoid";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is frist note",
      date: "07/08/1998",
    },
    {
      id: nanoid(),
      text: "this is second note",
      date: "07/08/1999",
    },
    {
      id: nanoid(),
      text: "this is third note",
      date: "07/08/2000",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
