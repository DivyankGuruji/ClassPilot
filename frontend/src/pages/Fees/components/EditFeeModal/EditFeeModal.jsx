/**
 * ==========================================
 * Component : EditFeeModal
 * Project : ClassPilot
 * ==========================================
 */

import {

    useEffect,
    useState,

} from "react";

import FeeForm from "../AddFeeModal/FeeForm";

import "../AddFeeModal/AddFeeModal.css";

const initialForm = {

    id: null,

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

function EditFeeModal({

    isOpen,

    fee,

    onClose,

    onUpdate,

}) {

    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {

        if (fee) {

            setFormData({

                ...fee,

            });

        }

    }, [fee]);

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

        onUpdate({

            ...formData,

            amount: Number(formData.amount),

            paid: Number(formData.paid),

            due: Number(formData.due),

        });

        onClose();

    };

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="modal-box">

                <div className="modal-header">

                    <h2>

                        Edit Fee Record

                    </h2>

                    <button

                        onClick={onClose}

                    >

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

                        Update Record

                    </button>

                </div>

            </div>

        </div>

    );

}

export default EditFeeModal;