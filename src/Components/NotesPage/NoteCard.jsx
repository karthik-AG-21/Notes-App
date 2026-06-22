import "./NoteCard.css"
import { LuPin, LuArchive, LuPencil, LuTrash2 } from "react-icons/lu";


function NoteCard({ note }) {
  if (!note) {
    return <h2>loading ....</h2>
  }

  return (

    <div className="note-card">

      <div className="flex justify-between items-center">
        <h3>{note.title}</h3>

        {note.pinned && <LuPin />}
      </div>

      <p>{note.content}</p>

      <div className="mt-4">
        <span className="tag-badge">
          {note.tag}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">

        <small>{note.createdAt}</small>

        <div className="flex gap-3">
          
          <LuPencil />
          <LuArchive />
          <LuTrash2 />
          <LuPin />
        </div>

      </div>

    </div>
  );
}

export default NoteCard;