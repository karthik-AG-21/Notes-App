import { FaFilter } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import "./Header.css";



function Header({ darkMode, setDarkMode, setSearch, search}) {
    return (
        <header className="page-header">

            <div className="search-box">
                <input
                    className="search-input"
                    type="search"
                    placeholder="Search notes..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>

            {/* <button className="filter-btn" >
                <FaFilter />
                <span>Filter</span>
            </button> */}

            <select className={`border rounded-lg px-3 py-2 ${darkMode
                    ? "bg-gray-800 text-white"
                    : "bg-white text-black"
                }`}>
                <option>Latest</option>
                <option>Oldest</option>
            </select>

            <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
            </button>

        </header>
    );
}

export default Header;