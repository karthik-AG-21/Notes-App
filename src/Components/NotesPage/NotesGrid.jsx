import NoteCard from "./NoteCard"

function NotesGrid({note, deleteNote}) {

  const pinnedNotes = note.filter(
    (item) => item.Pinned
  );

  const normalNotes = note.filter(
    (item) => !item.Pinned
  );

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">📌 Pinned Notes</h2>

      <div className="notes-grid">
      {pinnedNotes.map((note) => (
        <NoteCard deleteNote={deleteNote} key={note.id} note={item} />
      ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">📝 All Notes</h2>

      <div className="notes-grid">
      {normalNotes.map((item) => (
        <NoteCard deleteNote={deleteNote}  key={item.id} note={item} />
      ))}
      </div>
    </>
  );
}

export default NotesGrid;