import { useEffect, useState } from "react";

import Modal from "../../../../components/Modal/Modal";
import StudentForm from "../StudentForm/StudentForm";

function EditStudentModal({

    isOpen,

    onClose,

    student,

    onUpdate,

}) {

    const [formData, setFormData] = useState({});

    useEffect(() => {

        if(student){

            setFormData(student);

        }

    },[student]);

    const handleSubmit=(e)=>{

        e.preventDefault();

        onUpdate(formData);

        onClose();

    };

    return(

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title="Edit Student"

            size="lg"

        >

            <StudentForm

                student={formData}

                setStudent={setFormData}

                onSubmit={handleSubmit}

                submitText="Update Student"

            />

        </Modal>

    );

}

export default EditStudentModal;