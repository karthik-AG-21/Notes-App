import { useEffect, useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NotesGrid from "../NotesPage/NotesGrid";
import NoteForm from "../NoteForm/Form";



function NotesPage() {
    const [showForm, setShowForm] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [note, setNote] = useState([])
    const [edit, setEdit] = useState(null)
    const [view, setView] = useState("all")
    const [search, setSearch] = useState("");
    const [selectedTag, setSelectedTag] = useState("all");

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


    function updateNote(updatedNote) {
        setNote((prev) =>
            prev.map((item) =>
                item.id === updatedNote.id
                    ? updatedNote
                    : item
            )
        );
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


    function editNote(note) {

        setEdit(note)
        setShowForm(true)
    }

    useEffect(() => {
        console.log("updated", note)
    }, [edit])


    function createNoteForm() {
        setEdit(null)
        setShowForm(true)
    }


    function pinNote(id) {
        setNote((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, Pinned: !item.Pinned } : item)
        );
    }

    function archiveNote(id) {
        setNote((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, Archive: !item.Archive }
                    : item
            )
        );
    }


    let displayNotes = note;

    if (view === "all") {
        displayNotes = note.filter(
            (item) => !item.Archive
        );
    }
    if (selectedTag !== "all") {
        displayNotes = displayNotes.filter(
            (item) => item.tags === selectedTag
        );
    }

    displayNotes = displayNotes.filter(
        (item) =>
            item.title
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            item.content
                .toLowerCase()
                .includes(search.toLowerCase())
    );

    


    if (view === "pinned") {
        displayNotes = note.filter(item => item.Pinned)
    }
    if (view === "archived") {
        displayNotes = note.filter(item => item.Archive)
    }


    return (
        <div className={`flex min-h-screen ${darkMode
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
            }`}>
            <SideBar createNoteForm={createNoteForm} setShowForm={setShowForm} darkMode={darkMode} setView={setView}
                selectedTag={selectedTag} setSelectedTag={setSelectedTag} note={note} />

            <main className="flex-1">
                <Header darkMode={darkMode} setDarkMode={setDarkMode} setSearch={setSearch}
                    search={search} />
                {showForm && (
                    <div className="fixed index-0  bg-black/50 flex justify-center items-center" >
                        <NoteForm updateNote={updateNote} edit={edit} saveNote={saveNote} setShowForm={setShowForm} />
                    </div>
                )}

                <NotesGrid note={note} editNote={editNote} deleteNote={deleteNote}
                    pinNote={pinNote} displayNotes={displayNotes} archiveNote={archiveNote} />
            </main>
        </div>
    );
}

export default NotesPage;