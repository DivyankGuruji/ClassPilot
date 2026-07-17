/**
 * ==========================================
 * App Providers
 * Project : ClassPilot
 * ==========================================
 */

import { ThemeProvider } from "../context/ThemeContext";

import { StudentProvider } from "../context/StudentContext";
import { TeacherProvider } from "../context/TeacherContext";
import { BatchProvider } from "../context/BatchContext";
import { FeeProvider } from "../context/FeeContext";

function AppProviders({ children }) {

    return (

        <ThemeProvider>

            <StudentProvider>

                <TeacherProvider>

                    <BatchProvider>

                        <FeeProvider>

                            {children}

                        </FeeProvider>

                    </BatchProvider>

                </TeacherProvider>

            </StudentProvider>

        </ThemeProvider>

    );

}

export default AppProviders;