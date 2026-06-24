import { useEffect, useState } from "react";




function NoteForm({ saveNote, edit, updateNote, setShowForm }) {
  console.log("HEY",updateNote)

  console.log(edit)

console.log("EDIT NOTE:", edit);
  useEffect(()=>{
    if(edit){
      setTitle(edit.title)
      setColor(edit.color)
      setContent(edit.content)
      setTags(edit.tags)
    }else{
      setTitle("")
      setColor("")
      setContent("")
      setTags("")
    }
  },[edit])


  function noteData(e) {
    e.preventDefault();


  if (!content.trim()) {
    alert("Content cannot be empty");
    return
  }

  if (!title.trim()) {
    alert("Title cannot be empty");
    return 
  }

  if (title.length > 100) {
    alert("Title cannot exceed 100 characters");
    return 
  }




   

    let formData = {
      ...edit,
      tags,
      title,
      content,
      color,
    }
    console.log("FORM DATA", formData);
    if(edit){
      updateNote(formData)
    }else{
      saveNote(formData)
    }
    
    setShowForm(false)
  }


  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("yellow")

  return (
    <div className="bg-white rounded-xl p-6 shadow-md max-w-md">
      <form onSubmit={noteData}>

        <h2 className="text-xl font-bold mb-4">
          Create Note
        </h2>

        <input
          type="text"
          value={title}
          placeholder="Title"
          className="w-full border rounded-lg p-2 mb-4"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          maxLength={500}
          value={content}
          placeholder="Write your note..."
          className="w-full border rounded-lg p-2 h-32 mb-4"
          onChange={(e) => setContent(e.target.value)}
        />

        <select value={tags} onChange={(e) => setTags(e.target.value)} className="w-full border rounded-lg p-2 mb-4">
          <option >Select Tag</option>
          <option >Study</option>
          <option >Work</option>
          <option>Ideas</option>
          <option >Personal</option>
          <option >Others</option>
        </select>

        <div className="flex gap-3 mb-4">
          <button type="button" onClick={() => setColor("yellow")} className={`w-6 h-6 rounded-full bg-yellow-300 
          ${color === "yellow" ? "border-black scale-110" : "border-transparent"}`}></button>
          <button type="button" onClick={() => setColor("green")} className={`w-6 h-6 rounded-full bg-green-300
          ${color === "green"  ? "border-black scale-110"  : "border-transparent" }`} ></button>
          <button type="button" onClick={() => setColor("blue")} className={`w-6 h-6 rounded-full bg-blue-600 
          ${color === "blue" ? "border-black scale-110" : "border-transparent"}`}></button>
          <button type="button" onClick={() => setColor("purple")} className={`w-6 h-6 rounded-full bg-purple-300
           ${color === "purple" ? "border-black scale-110" : "border-transparent" }`} ></button>
        </div>

        <div className="flex justify-end gap-3">

          <button className="border px-4 py-2 rounded-lg" onClick={() => setShowForm(false)}>
            Cancel
          </button>


          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg"  >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default NoteForm;