/**
 * ==========================================
 * Component : DashboardStats
 * Project : ClassPilot
 * ==========================================
 */

import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaClipboardCheck,
    FaMoneyBillWave,
} from "react-icons/fa";

import StatsCard from "../../../../components/StatsCard/StatsCard";

import "./DashboardStats.css";

function DashboardStats() {

    const stats = [

        {
            id: 1,
            title: "Total Students",
            value: "248",
            icon: <FaUserGraduate />,
            color: "#2563eb",
            growth: "+12%",
        },

        {
            id: 2,
            title: "Total Teachers",
            value: "18",
            icon: <FaChalkboardTeacher />,
            color: "#22c55e",
            growth: "+4%",
        },

        {
            id: 3,
            title: "Today's Attendance",
            value: "231",
            icon: <FaClipboardCheck />,
            color: "#f59e0b",
            growth: "93%",
        },

        {
            id: 4,
            title: "Monthly Revenue",
            value: "₹4.8L",
            icon: <FaMoneyBillWave />,
            color: "#8b5cf6",
            growth: "+18%",
        },

    ];

    return (

        <section className="dashboard-stats">

            {

                stats.map((item) => (

                    <StatsCard
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        icon={item.icon}
                        color={item.color}
                        growth={item.growth}
                    />

                ))

            }

        </section>

    );

}

export default DashboardStats;