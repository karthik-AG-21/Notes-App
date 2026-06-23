import "./NoteCard.css"
import { LuPin, LuArchive, LuPencil, LuTrash2 } from "react-icons/lu";


function NoteCard({ note,  deleteNote }) {
  if (!note) {
    return <h2>loading ....</h2>
  }



  const colorClasses = {
    yellow: "bg-yellow-300",
    green: "bg-green-300",
    blue: "bg-blue-300",
    purple: "bg-purple-200",
  };

  console.log(colorClasses[note.color])
  return (

    <div className={`note-card ${colorClasses[note.color]}` }>

      <div className="flex justify-between items-center">
        <h3>{note.title}</h3>

        {note.pinned && <LuPin />}
      </div>

      <p>{note.content}</p>

      <div className="mt-4">
        <span className="tag-badge">
          {note.tags}
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">

        <small>{note.createdAt}</small>

        <div className="flex gap-6">

          <LuPencil />
          <LuArchive />
          <LuTrash2 onClick={() => deleteNote(note.id)} />
          <LuPin />

        </div>

      </div>

    </div>
  );
}

export default NoteCard; 