import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Theme from "./components/Theme";

import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  return (
    <div className="container">
      <ChakraProvider>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Theme/>
          
        </AnimatePresence>
        
      </ChakraProvider>
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
