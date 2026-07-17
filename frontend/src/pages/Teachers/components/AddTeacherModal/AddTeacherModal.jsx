/**
 * ==========================================
 * Component : AddTeacherModal
 * Project : ClassPilot
 * ==========================================
 */

import { useState } from "react";

import Modal from "../../../../components/Modal/Modal";
import TeacherForm from "./TeacherForm";

const initialForm = {

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

function AddTeacherModal({

    isOpen,

    onClose,

    onSave,

}) {

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    const handleSubmit = () => {

        onSave(formData);

        setFormData(initialForm);

        onClose();

    };

    const handleClose = () => {

        setFormData(initialForm);

        onClose();

    };

    return (

        <Modal

            isOpen={isOpen}

            onClose={handleClose}

            title="Add Teacher"

        >

            <TeacherForm

                formData={formData}

                handleChange={handleChange}

            />

            <div className="modal-footer">

                <button

                    className="cancel-btn"

                    onClick={handleClose}

                >

                    Cancel

                </button>

                <button

                    className="save-btn"

                    onClick={handleSubmit}

                >

                    Save Teacher

                </button>

            </div>

        </Modal>

    );

}

export default AddTeacherModal;