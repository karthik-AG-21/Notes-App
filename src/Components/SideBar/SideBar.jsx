import { GrDocumentNotes } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuPin } from "react-icons/lu";
import { BiArchiveIn } from "react-icons/bi";
import './SideBar.css'
import Tags from "./Tags";


function SideBar({ setShowForm, darkMode, createNoteForm, setView , selectedTag , setSelectedTag, note}) {

    const navItems = [{ name: "All Notes", view:"all", icon: <IoHomeOutline /> }, { name: "Pinned Notes", view:"pinned", icon: <LuPin /> }, { name: "Archived Notes", view:"archived", icon: <BiArchiveIn /> }]

    return (
        <>
            <div className="flex flex-col h-screen w-48 border-r" >
                <div className="flex justify-center items-center m-6 gap-3">
                    <div className="page-logo">
                        <GrDocumentNotes />
                    </div>
                    <h2 className="font-bold">Notes</h2>
                </div>
                <div className="flex justify-center items-center m-6">
                    <button className="create-btn" onClick={createNoteForm}>+ New Note </button>
                </div>


                <div className="flex flex-col gap-5 m-6 mt-8">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={()=>setView(item.view)}
                            className="flex items-center gap-3 font-medium  ">
                            <span className=" text-xl">{item.icon}</span>
                            <span>{item.name}</span>
                        </button>
                    ))}
                </div>

                <div className="flex flex-col gap-5 m-6 mt-8">
                    <Tags note={note} selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
                </div>
                
            </div>

            

        </>
    )

}

export default SideBar;