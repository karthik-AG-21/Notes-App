import { useState } from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import NotesGrid from "../NotesPage/NotesGrid";


function NotesPage() {
    const [showForm, setShowForm] = useState(false);
    const [darkMode, setDarkMode] = useState(false)

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
                    <NoteForm
                        setShowForm={setShowForm}
                    />
                )}

                <NotesGrid />
            </main>
        </div>
    );
}

export default NotesPage;