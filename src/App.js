import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from 'nanoid'
function App() {
  const [notes, setNotes] = useState([{
    id: nanoid(),
    text: 'this is frist note',
    date: '07/08/1998'
  },
  {
    id: nanoid(),
    text: 'this is second note',
    date: '07/08/1999'
  },
  {
    id: nanoid(),
    text: 'this is third note',
    date: '07/08/2000'
  },
])
  return (
    <div className='container'>
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
