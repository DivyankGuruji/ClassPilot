/**
 * ==========================================
 * Dashboard
 * Project : ClassPilot
 * ==========================================
 */

import DashboardHeader from "./components/DashboardHeader/DashboardHeader";
import DashboardStats from "./components/DashboardStats/DashboardStats";
import DashboardCharts from "./components/DashboardCharts/DashboardCharts";
import QuickActions from "./components/QuickActions/QuickActions";
import RecentActivities from "./components/RecentActivities/RecentActivities";
import UpcomingClasses from "./components/UpcomingClasses/UpcomingClasses";

import "./Dashboard.css";

function Dashboard() {

    return (

        <div className="dashboard-page">

            <DashboardHeader />

            <DashboardStats />

            <div className="dashboard-grid">

                <DashboardCharts />

                <QuickActions />

            </div>

            <div className="dashboard-grid">

                <RecentActivities />

                <UpcomingClasses />

            </div>

        </div>

    );

}

export default Dashboard;