import { NavLink } from "react-router-dom";

import sidebarMenu from "../../constants/sidebarMenu";

import "./Sidebar.css";

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Logo */}

            <div className="sidebar-logo">

                <h2>ClassPilot</h2>

            </div>

            {/* Menu */}

            <nav className="sidebar-menu">

                {sidebarMenu.map((item) => {

                    const Icon = item.icon;

                    return (

                        <NavLink
                            key={item.id}
                            to={item.path}
                            className={({ isActive }) =>
                                isActive
                                    ? "menu-item active"
                                    : "menu-item"
                            }
                        >
                            <Icon className="menu-icon" />

                            <span>{item.title}</span>

                        </NavLink>

                    );

                })}

            </nav>

            {/* Footer */}

            <div className="sidebar-footer">

                <p>ClassPilot v1.0</p>

            </div>

        </aside>
    );
}

export default Sidebar;