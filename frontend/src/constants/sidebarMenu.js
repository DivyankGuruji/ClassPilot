import {
    FaHome,
    FaUserGraduate,
    FaChalkboardTeacher,
    FaClipboardCheck,
    FaMoneyBillWave,
    FaLayerGroup,
    FaBook,
    FaFileAlt,
    FaChartBar
} from "react-icons/fa";

const sidebarMenu = [

    {
        id: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: FaHome,
    },

    {
        id: 2,
        title: "Students",
        path: "/students",
        icon: FaUserGraduate,
    },

    {
        id: 3,
        title: "Teachers",
        path: "/teachers",
        icon: FaChalkboardTeacher,
    },

    {
        id: 4,
        title: "Attendance",
        path: "/attendance",
        icon: FaClipboardCheck,
    },

    {
        id: 5,
        title: "Fees",
        path: "/fees",
        icon: FaMoneyBillWave,
    },

    {
        id: 6,
        title: "Batches",
        path: "/batches",
        icon: FaLayerGroup,
    },

    {
        id: 7,
        title: "Homework",
        path: "/homework",
        icon: FaBook,
    },

    {
        id: 8,
        title: "Tests",
        path: "/tests",
        icon: FaFileAlt,
    },

    {
        id: 9,
        title: "Reports",
        path: "/reports",
        icon: FaChartBar,
    }

];

export default sidebarMenu;