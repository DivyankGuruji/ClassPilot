/**
 * ==========================================
 * Component : DashboardHeader
 * Project : ClassPilot
 * ==========================================
 */

import {

    FaBell,

} from "react-icons/fa";

import ThemeToggle from "../../../../components/ThemeToggle/ThemeToggle";

import "./DashboardHeader.css";

function DashboardHeader() {

    return (

        <header className="dashboard-header">

            <div className="dashboard-header-left">

                <h1>

                    Dashboard

                </h1>

                <p>

                    Welcome back! Have a productive day.

                </p>

            </div>

            <div className="dashboard-header-right">

                <ThemeToggle />

                <button>

                    <FaBell />

                </button>

                <div className="dashboard-user">

                    <div className="dashboard-user-avatar">

                        A

                    </div>

                    <div className="dashboard-user-info">

                        <h4>

                            Admin

                        </h4>

                        <span>

                            Administrator

                        </span>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default DashboardHeader;