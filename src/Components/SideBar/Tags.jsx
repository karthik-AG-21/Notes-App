
import { IoIosPricetags } from "react-icons/io";
function Tags({note ,selectedTag, setSelectedTag}){

const tags = [
  {
    name: "Study",
    count: note.filter(
      (item) => item.tags === "Study"
    ).length
  },
  {
    name: "Work",
    count: note.filter(
      (item) => item.tags === "Work"
    ).length
  },
  {
    name: "Ideas",
    count: note.filter(
      (item) => item.tags === "Ideas"
    ).length
  },
  {
    name: "Personal",
    count: note.filter(
      (item) => item.tags === "Personal"
    ).length
  },
  {
    name: "Others",
    count: note.filter(
      (item) => item.tags === "Others"
    ).length
  }
];

    return(
        <>
       <div className="flex flex-col items-start gap-3">

  <div className="flex items-center gap-2 mb-2">
    <span className="text-2xl text-blue-500">
      <IoIosPricetags />
    </span>
    <h2 className="font-bold text-xl">Tags</h2>
  </div>

  <div
    onClick={() => setSelectedTag("all")}
    className="flex justify-between w-full px-2 py-1 rounded cursor-pointer"
  >
    <span>All</span>
    <span>{note.length}</span>
  </div>

  {tags.map((item) => (
    <div
      key={item.name}
      onClick={() => setSelectedTag(item.name)}
      className="flex justify-between w-full px-2 py-1 rounded cursor-pointer"
    >
      <span>{item.name}</span>
      <span>{item.count}</span>
    </div>
  ))}

</div>
        </>
    )
}

export default Tags;