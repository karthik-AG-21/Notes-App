import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";



function MainHead (){


    return (
       
        <div className="flex">
        <SideBar/>
        <Header />
        </div>
        
    )
}

export default MainHead;