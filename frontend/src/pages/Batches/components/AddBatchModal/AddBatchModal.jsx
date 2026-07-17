/**
 * ==========================================
 * Component : AddBatchModal
 * Project : ClassPilot
 * ==========================================
 */

import { useState } from "react";

import BatchForm from "./BatchForm";

import "./AddBatchModal.css";

const initialForm = {

    batchCode: "",

    batchName: "",

    course: "B.Tech",

    semester: "",

    teacher: "",

    students: "",

    room: "",

    timing: "",

    startDate: "",

    endDate: "",

    status: "Active",

};

function AddBatchModal({

    isOpen,

    onClose,

    onSave,

}) {

    const [formData, setFormData] = useState(initialForm);

    const handleChange = (e) => {

        const {

            name,

            value,

        } = e.target;

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

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="modal-box">

                <div className="modal-header">

                    <h2>

                        Add Batch

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <BatchForm

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

                        Save Batch

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddBatchModal;