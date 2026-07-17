/**
 * ==========================================
 * Component : EditBatchModal
 * Project : ClassPilot
 * ==========================================
 */

import {

    useEffect,
    useState,

} from "react";

import BatchForm from "../AddBatchModal/BatchForm";

import "../AddBatchModal/AddBatchModal.css";

const initialForm = {

    id: null,

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

function EditBatchModal({

    isOpen,

    batch,

    onClose,

    onUpdate,

}) {

    const [formData, setFormData] = useState(initialForm);

    useEffect(() => {

        if (batch) {

            setFormData(batch);

        }

    }, [batch]);

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

        onUpdate(formData);

        onClose();

    };

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="modal-box">

                <div className="modal-header">

                    <h2>

                        Edit Batch

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

                        Update Batch

                    </button>

                </div>

            </div>

        </div>

    );

}

export default EditBatchModal;