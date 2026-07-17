import { useMemo, useState } from "react";

import Pagination from "../../components/Pagination/Pagination";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";

import StudentHeader from "./StudentHeader";
import StudentFilter from "./StudentFilter";
import StudentTable from "./StudentTable";

import AddStudentModal from "./components/AddStudentModal/AddStudentModal";
import EditStudentModal from "./components/EditStudentModal/EditStudentModal";
import StudentProfileModal from "./components/StudentProfileModal/StudentProfileModal";

import { useStudentContext } from "../../context/StudentContext";

import "./Students.css";

function Students() {

    const {

        students,

        loading,

        error,

        addStudent,

        updateStudent,

        deleteStudent,

    } = useStudentContext();

    const [search, setSearch] = useState("");

    const [batch, setBatch] = useState("All");

    const [page, setPage] = useState(1);

    const [addModalOpen, setAddModalOpen] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);

    const [profileModalOpen, setProfileModalOpen] = useState(false);

    const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const filteredStudents = useMemo(() => {

        return students.filter((student) => {

            const matchesSearch =
                student.fullName
                    ?.toLowerCase()
                    .includes(search.toLowerCase());

            const matchesBatch =
                batch === "All"
                    ? true
                    : student.batch === batch;

            return matchesSearch && matchesBatch;

        });

    }, [students, search, batch]);



    const handleAddStudent = async (student) => {

        await addStudent(student);

        setAddModalOpen(false);

    };



    const handleEditClick = (student) => {

        setSelectedStudent(student);

        setEditModalOpen(true);

    };



    const handleUpdateStudent = async (student) => {

        await updateStudent(student);

        setEditModalOpen(false);

        setSelectedStudent(null);

    };



    const handleViewStudent = (student) => {

        setSelectedStudent(student);

        setProfileModalOpen(true);

    };



    const handleDeleteClick = (student) => {

        setSelectedStudent(student);

        setConfirmDialogOpen(true);

    };



    const handleDeleteStudent = async () => {

        if (!selectedStudent) return;

        await deleteStudent(selectedStudent.id);

        setConfirmDialogOpen(false);

        setSelectedStudent(null);

    };



    if (loading) {

        return (

            <div className="students-loading">

                Loading Students...

            </div>

        );

    }



    if (error) {

        return (

            <div className="students-error">

                Something went wrong while loading students.

            </div>

        );

    }



    return (

        <div className="students-page">

            <StudentHeader

                onAddStudent={() => setAddModalOpen(true)}

            />



            <StudentFilter

                search={search}

                setSearch={setSearch}

                batch={batch}

                setBatch={setBatch}

            />



            <StudentTable

                students={filteredStudents}

                onView={handleViewStudent}

                onEdit={handleEditClick}

                onDelete={handleDeleteClick}

            />



            <Pagination

                currentPage={page}

                totalPages={1}

                onPageChange={setPage}

            />



            <AddStudentModal

                isOpen={addModalOpen}

                onClose={() => setAddModalOpen(false)}

                onSave={handleAddStudent}

            />



            <EditStudentModal

                isOpen={editModalOpen}

                onClose={() => {

                    setEditModalOpen(false);

                    setSelectedStudent(null);

                }}

                student={selectedStudent}

                onUpdate={handleUpdateStudent}

            />



            <StudentProfileModal

                isOpen={profileModalOpen}

                onClose={() => {

                    setProfileModalOpen(false);

                    setSelectedStudent(null);

                }}

                student={selectedStudent}

            />



            <ConfirmDialog

                isOpen={confirmDialogOpen}

                onClose={() => {

                    setConfirmDialogOpen(false);

                    setSelectedStudent(null);

                }}

                onConfirm={handleDeleteStudent}

                title="Delete Student"

                message={`Are you sure you want to delete "${selectedStudent?.fullName ?? ""}" ?`}

                confirmText="Delete"

                cancelText="Cancel"

            />

        </div>

    );

}

export default Students;