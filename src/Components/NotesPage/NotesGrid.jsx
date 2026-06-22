import NoteCard from "./NoteCard"

function NotesGrid() {
const pinnedNotes = [
  {
    id: 1,
    title: "React Hooks",
    content: "Learn useState and useEffect",
    tag: "Study",
    color: "yellow",
    pinned: true,
    archived: false,
    createdAt: "Jun 23, 2026"
  },
  {
    id: 2,
    title: "Daily Reading",
    content: "Read 2 pages every day",
    tag: "Personal",
    color: "green",
    pinned: true,
    archived: false,
    createdAt: "Jun 22, 2026"
  }
];

const notes = [
  {
    id: 3,
    title: "Project Ideas",
    content: "Build a Google Keep clone using React",
    tag: "Work",
    color: "blue",
    pinned: false,
    archived: false,
    createdAt: "Jun 21, 2026"
  },
  {
    id: 4,
    title: "Daily Tasks",
    content: "Practice React for 2 hours",
    tag: "Study",
    color: "purple",
    pinned: false,
    archived: false,
    createdAt: "Jun 20, 2026"
  },
  {
    id: 5,
    title: "Shopping List",
    content: "Milk, Bread, Eggs, Fruits",
    tag: "Personal",
    color: "pink",
    pinned: false,
    archived: false,
    createdAt: "Jun 19, 2026"
  },
  {
    id: 6,
    title: "Old Meeting Notes",
    content: "Discuss project timeline and deliverables",
    tag: "Work",
    color: "gray",
    pinned: false,
    archived: true,
    createdAt: "Jun 15, 2026"
  }
];
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">📌 Pinned Notes</h2>

      <div className="notes-grid">
      {pinnedNotes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">📝 All Notes</h2>

      <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
      </div>
    </>
  );
}

export default NotesGrid;