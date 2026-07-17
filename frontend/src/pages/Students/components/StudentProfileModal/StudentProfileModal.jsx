import Modal from "../../../../components/Modal/Modal";
import ProfileCard from "../../../../components/ProfileCard/ProfileCard";

function StudentProfileModal({

    isOpen,

    onClose,

    student,

}) {

    if (!student) return null;

    const fields = [

        {
            label: "Roll Number",
            value: student.rollNumber,
        },

        {
            label: "Admission Number",
            value: student.admissionNumber,
        },

        {
            label: "Course",
            value: student.course,
        },

        {
            label: "Batch",
            value: student.batch,
        },

        {
            label: "Mobile",
            value: student.mobile,
        },

        {
            label: "Parent Mobile",
            value: student.parentMobile,
        },

        {
            label: "Email",
            value: student.email,
        },

        {
            label: "Father Name",
            value: student.fatherName,
        },

        {
            label: "Mother Name",
            value: student.motherName,
        },

        {
            label: "Fees",
            value: `₹ ${student.fees}`,
        },

        {
            label: "Joining Date",
            value: student.joiningDate,
        },

        {
            label: "Address",
            value: student.address,
        }

    ];

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title="Student Profile"

            size="lg"

        >

            <ProfileCard

                image={student.photo}

                title={student.fullName}

                subtitle={`${student.course} • ${student.batch}`}

                fields={fields}

            />

        </Modal>

    );

}

export default StudentProfileModal;