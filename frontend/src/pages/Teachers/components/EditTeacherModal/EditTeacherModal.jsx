/**
 * ==========================================
 * Component : EditTeacherModal
 * Project : ClassPilot
 * ==========================================
 */

import { useEffect, useState } from "react";

import Modal from "../../../../components/Modal/Modal";
import TeacherForm from "../AddTeacherModal/TeacherForm";

import "../AddTeacherModal/AddTeacherModal.css";

const initialForm = {

    id: null,

    employeeId: "",

    fullName: "",

    gender: "Male",

    department: "",

    subject: "",

    qualification: "",

    experience: "",

    mobile: "",

    email: "",

    salary: "",

    joiningDate: "",

    address: "",

    status: "Active",

};

function EditTeacherModal({

    isOpen,

    teacher,

    onClose,

    onUpdate,

}) {

    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {

        if (teacher) {

            setFormData(teacher);

        }

    }, [teacher]);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const handleSubmit = () => {

        onUpdate(formData);

        onClose();

    };

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title="Edit Teacher"

        >

            <TeacherForm

                formData={formData}

                handleChange={handleChange}

            />

            <div className="modal-footer">

                <button

                    className="cancel-btn"

                    onClick={onClose}

                >

                    Cancel

                </button>

                <button

                    className="save-btn"

                    onClick={handleSubmit}

                >

                    Update Teacher

                </button>

            </div>

        </Modal>

    );

}

export default EditTeacherModal;