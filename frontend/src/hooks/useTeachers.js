/**
 * ==========================================
 * Hook : useTeachers
 * Project : ClassPilot
 * ==========================================
 */

import { useEffect, useState } from "react";
import teacherService from "../services/teacherService";

function useTeachers() {

    const [teachers, setTeachers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**
     * Load Teachers
     */
    const loadTeachers = async () => {

        try {

            setLoading(true);

            const data = await teacherService.getTeachers();

            setTeachers(data);

        } catch (err) {

            console.error(err);
            setError(err);

        } finally {

            setLoading(false);

        }

    };

    /**
     * Add Teacher
     */
    const addTeacher = async (teacher) => {

        try {

            const newTeacher = await teacherService.addTeacher(teacher);

            setTeachers((prev) => [

                ...prev,

                newTeacher,

            ]);

        } catch (err) {

            console.error(err);
            setError(err);

        }

    };

    /**
     * Update Teacher
     */
    const updateTeacher = async (teacher) => {

        try {

            const updatedTeacher = await teacherService.updateTeacher(teacher);

            setTeachers((prev) =>

                prev.map((item) =>

                    item.id === updatedTeacher.id

                        ? updatedTeacher

                        : item

                )

            );

        } catch (err) {

            console.error(err);
            setError(err);

        }

    };

    /**
     * Delete Teacher
     */
    const deleteTeacher = async (id) => {

        try {

            await teacherService.deleteTeacher(id);

            setTeachers((prev) =>

                prev.filter((teacher) => teacher.id !== id)

            );

        } catch (err) {

            console.error(err);
            setError(err);

        }

    };

    useEffect(() => {

        loadTeachers();

    }, []);

    return {

        teachers,
        loading,
        error,

        loadTeachers,

        addTeacher,

        updateTeacher,

        deleteTeacher,

    };

}

export default useTeachers;