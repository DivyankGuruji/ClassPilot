import "./Navbar.css";

import {
    FaSearch,
    FaBell,
    FaMoon,
    FaUserCircle,
    FaChevronDown
} from "react-icons/fa";

function Navbar() {
    return (

        <header className="navbar">

            <div className="navbar-left">

                <h2 className="page-title">
                    Dashboard
                </h2>

            </div>


            <div className="navbar-right">

                <div className="search-box">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search..."
                    />

                </div>


                <button className="nav-icon-btn">

                    <FaBell />

                </button>


                <button className="nav-icon-btn">

                    <FaMoon />

                </button>


                <div className="profile">

                    <FaUserCircle className="profile-icon" />

                    <div className="profile-info">

                        <span className="profile-name">

                            Admin

                        </span>

                        <span className="profile-role">

                            Administrator

                        </span>

                    </div>

                    <FaChevronDown />

                </div>

            </div>

        </header>

    );
}

export default Navbar;