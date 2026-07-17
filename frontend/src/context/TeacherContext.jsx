/**
 * ==========================================
 * Teacher Context
 * Project : ClassPilot
 * ==========================================
 */

import { createContext, useContext } from "react";
import useTeachers from "../hooks/useTeachers";

const TeacherContext = createContext(null);

function TeacherProvider({ children }) {

    const teacher = useTeachers();

    return (

        <TeacherContext.Provider value={teacher}>

            {children}

        </TeacherContext.Provider>

    );

}

function useTeacherContext() {

    const context = useContext(TeacherContext);

    if (!context) {

        throw new Error(
            "useTeacherContext must be used inside TeacherProvider"
        );

    }

    return context;

}

export {

    TeacherProvider,
    useTeacherContext,

};