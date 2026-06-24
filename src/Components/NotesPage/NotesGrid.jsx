import NoteCard from "./NoteCard"

function NotesGrid({note, deleteNote , editNote, pinNote, displayNotes, archiveNote}) {

  const pinnedNotes = note.filter(
    (item) => item.Pinned
  );

  const normalNotes = note.filter(
    (item) => !item.Pinned
  );

  return (
    <>
     

      <div className="notes-grid">
      {displayNotes.map((note) => (
        <NoteCard pinNote={pinNote} deleteNote={deleteNote} key={note.id} note={note}  editNote={editNote} archiveNote={archiveNote}/>
      ))}
      </div>

    </>
  );
}

export default NotesGrid;