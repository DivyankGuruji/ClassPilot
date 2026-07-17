/**
 * ==========================================
 * Page : Teachers
 * Project : ClassPilot
 * ==========================================
 */

import { useMemo, useState } from "react";

import { useTeacherContext } from "../../context/TeacherContext";

import TeacherHeader from "./TeacherHeader";
import TeacherFilter from "./TeacherFilter";
import TeacherTable from "./TeacherTable";

import AddTeacherModal from "./components/AddTeacherModal/AddTeacherModal";
import EditTeacherModal from "./components/EditTeacherModal/EditTeacherModal";
import TeacherProfileModal from "./components/TeacherProfileModal/TeacherProfileModal";

import DeleteConfirmationModal from "./components/DeleteConfirmationModal/DeleteConfirmationModal";

import "./Teachers.css";

function Teachers() {

    const {

        teachers,
        loading,
        error,

        addTeacher,
        updateTeacher,
        deleteTeacher,

    } = useTeacherContext();

    const [search, setSearch] = useState("");

    const [department, setDepartment] = useState("All");

    const [status, setStatus] = useState("All");

    const [addModalOpen, setAddModalOpen] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);

    const [profileOpen, setProfileOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const filteredTeachers = useMemo(() => {

        return teachers.filter((teacher) => {

            const matchesSearch = teacher.fullName
                .toLowerCase()
                .includes(search.toLowerCase());

            const matchesDepartment =
                department === "All"
                    ? true
                    : teacher.department === department;

            const matchesStatus =
                status === "All"
                    ? true
                    : teacher.status === status;

            return (
                matchesSearch &&
                matchesDepartment &&
                matchesStatus
            );

        });

    }, [teachers, search, department, status]);

    // ============================
    // Add
    // ============================

    const handleAddTeacher = async (teacher) => {

        await addTeacher(teacher);

        setAddModalOpen(false);

    };

    // ============================
    // Edit
    // ============================

    const handleEditTeacher = (teacher) => {

        setSelectedTeacher(teacher);

        setEditModalOpen(true);

    };

    const handleUpdateTeacher = async (teacher) => {

        await updateTeacher(teacher);

        setEditModalOpen(false);

        setSelectedTeacher(null);

    };

    // ============================
    // View
    // ============================

    const handleViewTeacher = (teacher) => {

        setSelectedTeacher(teacher);

        setProfileOpen(true);

    };

    // ============================
    // Delete
    // ============================

    const handleDeleteClick = (teacher) => {

        setSelectedTeacher(teacher);

        setDeleteOpen(true);

    };

    const handleDeleteTeacher = async () => {

        if (!selectedTeacher) return;

        await deleteTeacher(selectedTeacher.id);

        setDeleteOpen(false);

        setSelectedTeacher(null);

    };

    if (loading) {

        return <h2>Loading Teachers...</h2>;

    }

    if (error) {

        return <h2>Failed to load teachers.</h2>;

    }

    return (

        <div className="teachers-page">

            <TeacherHeader

                onAddTeacher={() =>

                    setAddModalOpen(true)

                }

            />

            <TeacherFilter

                search={search}
                setSearch={setSearch}

                department={department}
                setDepartment={setDepartment}

                status={status}
                setStatus={setStatus}

            />

            <TeacherTable

                teachers={filteredTeachers}

                onView={handleViewTeacher}

                onEdit={handleEditTeacher}

                onDelete={handleDeleteClick}

            />

            <AddTeacherModal

                isOpen={addModalOpen}

                onClose={() =>

                    setAddModalOpen(false)

                }

                onSave={handleAddTeacher}

            />

            <EditTeacherModal

                isOpen={editModalOpen}

                teacher={selectedTeacher}

                onClose={() => {

                    setEditModalOpen(false);

                    setSelectedTeacher(null);

                }}

                onUpdate={handleUpdateTeacher}

            />

            <TeacherProfileModal

                isOpen={profileOpen}

                teacher={selectedTeacher}

                onClose={() => {

                    setProfileOpen(false);

                    setSelectedTeacher(null);

                }}

            />

            <DeleteConfirmationModal

                isOpen={deleteOpen}

                title="Delete Teacher"

                message={`Are you sure you want to delete "${selectedTeacher?.fullName}"?`}

                onCancel={() => {

                    setDeleteOpen(false);

                    setSelectedTeacher(null);

                }}

                onConfirm={handleDeleteTeacher}

            />

        </div>

    );

}

export default Teachers;