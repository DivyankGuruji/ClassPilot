/**
 * ==========================================
 * Component : AddFeeModal
 * Project : ClassPilot
 * ==========================================
 */

import { useState } from "react";

import FeeForm from "./FeeForm";

import "./AddFeeModal.css";

const initialForm = {

    receiptNo: "",

    studentName: "",

    rollNo: "",

    course: "B.Tech",

    semester: "",

    amount: "",

    paid: "",

    due: "",

    paymentMode: "Cash",

    paymentDate: "",

    status: "Pending",

};

function AddFeeModal({

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

        onSave({

            ...formData,

            amount: Number(formData.amount),

            paid: Number(formData.paid),

            due: Number(formData.due),

        });

        setFormData(initialForm);

        onClose();

    };

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="modal-box">

                <div className="modal-header">

                    <h2>

                        Add Fee Record

                    </h2>

                    <button onClick={onClose}>

                        ✕

                    </button>

                </div>

                <FeeForm

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

                        Save

                    </button>

                </div>

            </div>

        </div>

    );

}

export default AddFeeModal;