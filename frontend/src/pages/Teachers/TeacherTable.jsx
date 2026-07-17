/**
 * ==========================================
 * Component : TeacherTable
 * Project : ClassPilot
 * ==========================================
 */

import {

    FaEye,
    FaEdit,
    FaTrash,

} from "react-icons/fa";

import "./TeacherTable.css";

function TeacherTable({

    teachers = [],

    onView = () => {},

    onEdit = () => {},

    onDelete = () => {},

}) {

    if (teachers.length === 0) {

        return (

            <div className="teacher-table-empty">

                <h3>No Teachers Found</h3>

                <p>

                    Try changing the search or filter.

                </p>

            </div>

        );

    }

    return (

        <div className="teacher-table-wrapper">

            <table className="teacher-table">

                <thead>

                    <tr>

                        <th>Employee ID</th>

                        <th>Name</th>

                        <th>Department</th>

                        <th>Subject</th>

                        <th>Experience</th>

                        <th>Mobile</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        teachers.map((teacher) => (

                            <tr key={teacher.id}>

                                <td>

                                    {teacher.employeeId}

                                </td>

                                <td>

                                    {teacher.fullName}

                                </td>

                                <td>

                                    {teacher.department}

                                </td>

                                <td>

                                    {teacher.subject}

                                </td>

                                <td>

                                    {teacher.experience}

                                </td>

                                <td>

                                    {teacher.mobile}

                                </td>

                                <td>

                                    <span

                                        className={`teacher-status ${

                                            teacher.status === "Active"

                                                ? "active"

                                                : "leave"

                                        }`}

                                    >

                                        {teacher.status}

                                    </span>

                                </td>

                                <td>

                                    <div className="teacher-actions">

                                        <button

                                            title="View"

                                            onClick={() =>

                                                onView(teacher)

                                            }

                                        >

                                            <FaEye />

                                        </button>

                                        <button

                                            title="Edit"

                                            onClick={() =>

                                                onEdit(teacher)

                                            }

                                        >

                                            <FaEdit />

                                        </button>

                                        <button

                                            title="Delete"

                                            onClick={() =>

                                                onDelete(teacher)

                                            }

                                        >

                                            <FaTrash />

                                        </button>

                                    </div>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default TeacherTable;