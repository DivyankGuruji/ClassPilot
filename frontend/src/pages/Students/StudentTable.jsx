/**
 * ==========================================
 * Component : StudentTable
 * Project   : ClassPilot
 * Version   : 2.0.0
 * ==========================================
 */

import {
    FaEye,
    FaEdit,
    FaTrash,
} from "react-icons/fa";

import Table from "../../components/Table/Table";

function StudentTable({

    students = [],

    onView,

    onEdit,

    onDelete,

}) {

    const columns = [

        {
            key: "fullName",
            label: "Student Name",
        },

        {
            key: "rollNumber",
            label: "Roll No.",
        },

        {
            key: "course",
            label: "Course",
        },

        {
            key: "batch",
            label: "Batch",
        },

        {
            key: "mobile",
            label: "Mobile",
        },

        {
            key: "fees",
            label: "Fees",
            render: (student) => `₹ ${student.fees || 0}`,
        },

        {
            key: "status",
            label: "Status",
            render: (student) => (

                <span
                    className={
                        student.status === "Active"
                            ? "status-badge active"
                            : "status-badge inactive"
                    }
                >
                    {student.status || "Active"}
                </span>

            ),
        },

    ];

    return (

        <Table

            columns={columns}

            data={students}

            emptyMessage="No Students Found"

            renderActions={(student) => (

                <div className="table-actions">

                    <button

                        className="table-action view"

                        onClick={() => onView(student)}

                        title="View Student"

                    >

                        <FaEye />

                    </button>

                    <button

                        className="table-action edit"

                        onClick={() => onEdit(student)}

                        title="Edit Student"

                    >

                        <FaEdit />

                    </button>

                    <button

                        className="table-action delete"

                        onClick={() => onDelete(student)}

                        title="Delete Student"

                    >

                        <FaTrash />

                    </button>

                </div>

            )}

        />

    );

}

export default StudentTable;