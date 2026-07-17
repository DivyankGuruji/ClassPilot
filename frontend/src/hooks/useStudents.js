/**
 * ==========================================
 * Hook : useStudents
 * Project : ClassPilot
 * ==========================================
 */

import { useEffect, useState } from "react";

import studentService from "../services/studentService";

function useStudents() {

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    /**
     * Load Students
     */

    const loadStudents = async () => {

        try {

            setLoading(true);

            const data = await studentService.getStudents();

            setStudents(data);

        }

        catch (err) {

            console.error(err);

            setError(err);

        }

        finally {

            setLoading(false);

        }

    };

    /**
     * Add Student
     */

    const addStudent = async (student) => {

        try {

            const newStudent =

                await studentService.addStudent(student);

            setStudents((prev) => [

                ...prev,

                newStudent,

            ]);

        }

        catch (err) {

            console.error(err);

            setError(err);

        }

    };

    /**
     * Update Student
     */

    const updateStudent = async (student) => {

        try {

            const updatedStudent =

                await studentService.updateStudent(student);

            setStudents((prev) =>

                prev.map((item) =>

                    item.id === updatedStudent.id

                        ? updatedStudent

                        : item

                )

            );

        }

        catch (err) {

            console.error(err);

            setError(err);

        }

    };

    /**
     * Delete Student
     */

    const deleteStudent = async (id) => {

        try {

            await studentService.deleteStudent(id);

            setStudents((prev) =>

                prev.filter(

                    (student) => student.id !== id

                )

            );

        }

        catch (err) {

            console.error(err);

            setError(err);

        }

    };

    useEffect(() => {

        loadStudents();

    }, []);

    return {

        students,

        loading,

        error,

        loadStudents,

        addStudent,

        updateStudent,

        deleteStudent,

    };

}

export default useStudents;