
import { IoIosPricetags } from "react-icons/io";
function Tags(){

    let tags = [{name:"Study", count:5 },{name:"Work", count:3},{name: "Ideas",count:2},{ name:"Personal" ,count:4}]


    return(
        <>
        <div className="flex flex-col items-start  gap-3">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl  text-blue-500"><IoIosPricetags /></span>
        <h2 className="font-bold text-xl">Tags</h2>
        </div>
        {tags.map((item)=>(
            <div   key={item?.name} className="flex justify-between w-full px-2 py-1 rounded  cursor-pointer ">
                <span>{item.name}</span><span>{item.count}</span>
            </div>
           
        ))}
        </div>
        </>
    )
}

export default Tags;