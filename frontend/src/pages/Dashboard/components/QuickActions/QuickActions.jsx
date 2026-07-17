/**
 * ==========================================
 * Component : QuickActions
 * Project : ClassPilot
 * ==========================================
 */

import {

    FaUserPlus,

    FaChalkboardTeacher,

    FaClipboardCheck,

    FaMoneyBillWave,

} from "react-icons/fa";

import "./QuickActions.css";

const actions = [

    {

        id: 1,

        title: "Add Student",

        icon: <FaUserPlus />,

        color: "#2563eb",

    },

    {

        id: 2,

        title: "Add Teacher",

        icon: <FaChalkboardTeacher />,

        color: "#22c55e",

    },

    {

        id: 3,

        title: "Take Attendance",

        icon: <FaClipboardCheck />,

        color: "#f59e0b",

    },

    {

        id: 4,

        title: "Collect Fees",

        icon: <FaMoneyBillWave />,

        color: "#8b5cf6",

    },

];

function QuickActions() {

    return (

        <section className="quick-actions">

            <div className="section-header">

                <h3>

                    Quick Actions

                </h3>

            </div>

            <div className="actions-grid">

                {

                    actions.map((action) => (

                        <button

                            key={action.id}

                            className="action-card"

                        >

                            <div

                                className="action-icon"

                                style={{

                                    background: action.color,

                                }}

                            >

                                {action.icon}

                            </div>

                            <span>

                                {action.title}

                            </span>

                        </button>

                    ))

                }

            </div>

        </section>

    );

}

export default QuickActions;