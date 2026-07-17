/**
 * ==========================================
 * Component : FeeTable
 * Project : ClassPilot
 * ==========================================
 */

import {

    FaEye,
    FaEdit,
    FaTrash,

} from "react-icons/fa";

import "./FeeTable.css";

function FeeTable({

    fees = [],

    onView = () => {},

    onEdit = () => {},

    onDelete = () => {},

}) {

    if (fees.length === 0) {

        return (

            <div className="fee-empty">

                <h3>

                    No Fee Records Found

                </h3>

                <p>

                    Try changing your search or filters.

                </p>

            </div>

        );

    }

    return (

        <div className="fee-table-wrapper">

            <table className="fee-table">

                <thead>

                    <tr>

                        <th>Receipt No.</th>

                        <th>Student</th>

                        <th>Roll No.</th>

                        <th>Course</th>

                        <th>Total Fee</th>

                        <th>Paid</th>

                        <th>Due</th>

                        <th>Mode</th>

                        <th>Status</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        fees.map((fee) => (

                            <tr key={fee.id}>

                                <td>

                                    {fee.receiptNo}

                                </td>

                                <td>

                                    {fee.studentName}

                                </td>

                                <td>

                                    {fee.rollNo}

                                </td>

                                <td>

                                    {fee.course}

                                </td>

                                <td>

                                    ₹{fee.amount.toLocaleString()}

                                </td>

                                <td>

                                    ₹{fee.paid.toLocaleString()}

                                </td>

                                <td>

                                    ₹{fee.due.toLocaleString()}

                                </td>

                                <td>

                                    {fee.paymentMode}

                                </td>

                                <td>

                                    <span

                                        className={`fee-status ${

                                            fee.status.toLowerCase()

                                        }`}

                                    >

                                        {fee.status}

                                    </span>

                                </td>

                                <td>

                                    <div className="fee-actions">

                                        <button

                                            title="View"

                                            onClick={() =>

                                                onView(fee)

                                            }

                                        >

                                            <FaEye />

                                        </button>

                                        <button

                                            title="Edit"

                                            onClick={() =>

                                                onEdit(fee)

                                            }

                                        >

                                            <FaEdit />

                                        </button>

                                        <button

                                            title="Delete"

                                            onClick={() =>

                                                onDelete(fee)

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

export default FeeTable;