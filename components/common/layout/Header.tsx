import { useState } from "react";

const Header = () => {
    const [search, setSearch] = useState("");

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Search</button>
            </div>
            <div>
                <button>Sign</button>
                <button>Sign up</button>
            </div>
            <input />
        </div>
    );
};

export default Header;