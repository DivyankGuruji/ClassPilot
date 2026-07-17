import { useState } from "react";

import Modal from "../../../../components/Modal/Modal";

import StudentForm from "../StudentForm/StudentForm";

import "./AddStudentModal.css";

function AddStudentModal({

    isOpen,

    onClose,

    onSave,

}) {

    const initialState = {

        fullName: "",

        rollNumber: "",

        admissionNumber: "",

        fatherName: "",

        motherName: "",

        mobile: "",

        parentMobile: "",

        email: "",

        address: "",

        course: "",

        batch: "",

        fees: "",

        joiningDate: "",

    };

    const [student, setStudent] = useState(initialState);

    const handleSubmit = (e) => {

        e.preventDefault();

        onSave({

            id: Date.now(),

            ...student,

            status: "Active",

        });

        setStudent(initialState);

        onClose();

    };

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title="Add Student"

            size="lg"

        >

            <StudentForm

                student={student}

                setStudent={setStudent}

                onSubmit={handleSubmit}

                submitText="Save Student"

            />

        </Modal>

    );

}

export default AddStudentModal;