import "./Header.css";

function Header(){
    return (
        <header className="">
            <div className ="bg-blue-500 text-white p-4 rounded">Logo</div>
            <input type="search"  placeholder="search "/>
            <button type="submit">Search</button>

            <button>Archive</button>
        </header>
    )
}

export default Header;