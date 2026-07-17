/**
 * ==========================================
 * Component : BatchTable
 * Project : ClassPilot
 * ==========================================
 */

import {

    FaEye,
    FaEdit,
    FaTrash,

} from "react-icons/fa";

import "./BatchTable.css";

function BatchTable({

    batches = [],

    onView = () => {},

    onEdit = () => {},

    onDelete = () => {},

}) {

    if (batches.length === 0) {

        return (

            <div className="batch-empty">

                <h3>

                    No Batches Found

                </h3>

                <p>

                    Try changing your search or filters.

                </p>

            </div>

        );

    }

    return (

        <div className="batch-table-wrapper">

            <table className="batch-table">

                <thead>

                    <tr>

                        <th>Batch Code</th>

                        <th>Batch Name</th>

                        <th>Course</th>

                        <th>Semester</th>

                        <th>Teacher</th>

                        <th>Students</th>

                        <th>Timing</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        batches.map((batch) => (

                            <tr key={batch.id}>

                                <td>

                                    {batch.batchCode}

                                </td>

                                <td>

                                    {batch.batchName}

                                </td>

                                <td>

                                    {batch.course}

                                </td>

                                <td>

                                    {batch.semester}

                                </td>

                                <td>

                                    {batch.teacher}

                                </td>

                                <td>

                                    {batch.students}

                                </td>

                                <td>

                                    {batch.timing}

                                </td>

                                <td>

                                    <span

                                        className={`batch-status ${

                                            batch.status === "Active"

                                                ? "active"

                                                : "inactive"

                                        }`}

                                    >

                                        {batch.status}

                                    </span>

                                </td>

                                <td>

                                    <div className="batch-actions">

                                        <button

                                            title="View"

                                            onClick={() =>

                                                onView(batch)

                                            }

                                        >

                                            <FaEye />

                                        </button>

                                        <button

                                            title="Edit"

                                            onClick={() =>

                                                onEdit(batch)

                                            }

                                        >

                                            <FaEdit />

                                        </button>

                                        <button

                                            title="Delete"

                                            onClick={() =>

                                                onDelete(batch)

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

export default BatchTable;