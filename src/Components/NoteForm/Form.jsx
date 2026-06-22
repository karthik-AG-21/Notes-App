function NoteForm() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-md">

      <h2 className="text-xl font-bold mb-4">
        Create Note
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="w-full border rounded-lg p-2 mb-4"
      />

      <textarea
        placeholder="Write your note..."
        className="w-full border rounded-lg p-2 h-32 mb-4"
      />

      <select className="w-full border rounded-lg p-2 mb-4">
        <option>Study</option>
        <option>Work</option>
        <option>Ideas</option>
        <option>Personal</option>
      </select>

      <div className="flex gap-3 mb-4">
        <button className="w-6 h-6 rounded-full bg-yellow-300"></button>
        <button className="w-6 h-6 rounded-full bg-green-300"></button>
        <button className="w-6 h-6 rounded-full bg-blue-300"></button>
        <button className="w-6 h-6 rounded-full bg-purple-300"></button>
      </div>

      <div className="flex gap-3">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Save
        </button>

        <button className="border px-4 py-2 rounded-lg">
          Cancel
        </button>
      </div>

    </div>
  );
}

export default NoteForm;