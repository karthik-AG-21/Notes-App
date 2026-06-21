import "./Header.css";
import { GrDocumentNotes } from "react-icons/gr";

function Header(){
    return (
        <header className="page-header">
            <div className ="page-logo">
                <GrDocumentNotes />
            </div>
            <div className="search-box">
            <input className="search-input" type="search"  placeholder="search "/>
            <button className="search-btn" type="submit">Search</button>
            </div>

            <button>Archive</button>
        </header>
    )
}

export default Header;