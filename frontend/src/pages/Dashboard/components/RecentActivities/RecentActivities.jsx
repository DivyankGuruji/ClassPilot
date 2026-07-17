/**
 * ==========================================
 * Component : RecentActivities
 * Project   : ClassPilot
 * ==========================================
 */

import {
    FaUserPlus,
    FaMoneyBillWave,
    FaClipboardCheck,
    FaBook,
} from "react-icons/fa";

import "./RecentActivities.css";

const activities = [

    {
        id: 1,
        title: "New Student Added",
        description: "Rahul Kumar joined Batch A",
        time: "5 min ago",
        icon: <FaUserPlus />,
        color: "#2563eb",
    },

    {
        id: 2,
        title: "Fee Collected",
        description: "₹15,000 received from Priya Sharma",
        time: "20 min ago",
        icon: <FaMoneyBillWave />,
        color: "#22c55e",
    },

    {
        id: 3,
        title: "Attendance Updated",
        description: "Attendance marked for Batch B",
        time: "1 hour ago",
        icon: <FaClipboardCheck />,
        color: "#f59e0b",
    },

    {
        id: 4,
        title: "Homework Created",
        description: "Physics Assignment uploaded",
        time: "2 hours ago",
        icon: <FaBook />,
        color: "#8b5cf6",
    },

];

function RecentActivities() {

    return (

        <section className="recent-activities">

            <div className="section-header">

                <h3>

                    Recent Activities

                </h3>

            </div>

            <div className="activity-list">

                {

                    activities.map((activity) => (

                        <div

                            key={activity.id}

                            className="activity-item"

                        >

                            <div
                                className="activity-icon"
                                style={{
                                    background: activity.color,
                                }}
                            >

                                {activity.icon}

                            </div>

                            <div className="activity-content">

                                <h4>

                                    {activity.title}

                                </h4>

                                <p>

                                    {activity.description}

                                </p>

                            </div>

                            <span className="activity-time">

                                {activity.time}

                            </span>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default RecentActivities;