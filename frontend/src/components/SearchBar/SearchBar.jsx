/**
 * -----------------------------------------
 * Component : SearchBar
 * Project   : ClassPilot
 * Version   : 1.0.0
 * -----------------------------------------
 */

import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

function SearchBar({

    value,

    onChange,

    placeholder = "Search...",

    width = "320px",

}) {

    return (

        <div
            className="search-bar"
            style={{ width }}
        >

            <FaSearch className="search-icon" />

            <input

                type="text"

                value={value}

                onChange={onChange}

                placeholder={placeholder}

            />

        </div>

    );

}

export default SearchBar;