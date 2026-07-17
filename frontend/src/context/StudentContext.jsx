/**
 * ==========================================
 * Student Context
 * Project : ClassPilot
 * ==========================================
 */

import {

    createContext,

    useContext,

} from "react";

import useStudents from "../hooks/useStudents";

const StudentContext = createContext(null);

function StudentProvider({ children }) {

    const student = useStudents();

    return (

        <StudentContext.Provider value={student}>

            {children}

        </StudentContext.Provider>

    );

}

function useStudentContext() {

    const context = useContext(StudentContext);

    if (!context) {

        throw new Error(

            "useStudentContext must be used inside StudentProvider"

        );

    }

    return context;

}

export {

    StudentProvider,

    useStudentContext,

};