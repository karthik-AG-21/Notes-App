import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NotesGrid from "../NotesPage/NotesGrid";
import NoteForm from "../NoteForm/Form";



function NotesPage() {
    const [showForm, setShowForm] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const [note, setNote] = useState([])

    useEffect(() => {
        if (note.length === 0) return;

        localStorage.setItem(
            "AllNotes",
            JSON.stringify(note)
        );
    }, [note]);

    useEffect(() => {
        const savedNotes =
            JSON.parse(localStorage.getItem("AllNotes")) || []

        console.log("Loaded:", savedNotes);

        setNote(savedNotes);
    }, []);





    function saveNote(data) {



        const duplicate = note.some(
            (item) =>
                item.title === data.title &&
                item.content === data.content
        );

        if (duplicate) {
            alert("Duplicate note");
            return;
        }
        const newNote = {
            id: Date.now(),
            ...data,
            Pinned: false,
            Archive: false,
            createdAt: new Date().toLocaleDateString()
        }

        console.log(newNote)
        setNote((prev) => [...prev, newNote])
    }

    function deleteNote(id) {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this note?"
  );

  if (!confirmDelete) return;

  setNote((prev) =>
    prev.filter((item) => item.id !== id)
  );
}





    return (
        <div className={`flex min-h-screen ${darkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
            }`}
        >
            <SideBar setShowForm={setShowForm} darkMode={darkMode} />

            <main className="flex-1">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                {showForm && (
                    <div className="fixed index-0  bg-black/50 flex justify-center items-center" >
                        <NoteForm saveNote={saveNote} setShowForm={setShowForm} />
                    </div>
                )}

                <NotesGrid note={note} deleteNote={deleteNote} />
            </main>
        </div>
    );
}

export default NotesPage;