/**
 * ==========================================
 * App Routes
 * Project : ClassPilot
 * ==========================================
 */

import { Navigate, Route, Routes } from "react-router-dom";

// Layout
import DashboardLayout from "../layouts/DashboardLayout";

// Pages
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Students from "../pages/Students/Students";
import Teachers from "../pages/Teachers/Teachers";
import Attendance from "../pages/Attendance/Attendance";
import Fees from "../pages/Fees/Fees";
import Batches from "../pages/Batches/Batches";
import Homework from "../pages/Homework/Homework";
import Tests from "../pages/Tests/Tests";
import Reports from "../pages/Reports/Reports";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {

    return (

        <Routes>

            <Route

                path="/"

                element={<Navigate to="/login" replace />}

            />

            <Route

                path="/login"

                element={<Login />}

            />

            <Route

                path="/forgot-password"

                element={<ForgotPassword />}

            />

            <Route

                path="/reset-password"

                element={<ResetPassword />}

            />

            <Route element={<DashboardLayout />}>

                <Route

                    path="/dashboard"

                    element={<Dashboard />}

                />

                <Route

                    path="/students"

                    element={<Students />}

                />

                <Route

                    path="/teachers"

                    element={<Teachers />}

                />

                <Route

                    path="/attendance"

                    element={<Attendance />}

                />

                <Route

                    path="/fees"

                    element={<Fees />}

                />

                <Route

                    path="/batches"

                    element={<Batches />}

                />

                <Route

                    path="/homework"

                    element={<Homework />}

                />

                <Route

                    path="/tests"

                    element={<Tests />}

                />

                <Route

                    path="/reports"

                    element={<Reports />}

                />

            </Route>

            <Route

                path="*"

                element={<NotFound />}

            />

        </Routes>

    );

}

export default AppRoutes;