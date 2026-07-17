/**
 * ==========================================
 * Component : FeeProfileModal
 * Project : ClassPilot
 * ==========================================
 */

import "./FeeProfileModal.css";

function FeeProfileModal({

    isOpen,

    fee,

    onClose,

}) {

    if (!isOpen || !fee) return null;

    return (

        <div className="modal-overlay">

            <div className="fee-profile-modal">

                <div className="modal-header">

                    <h2>

                        Fee Details

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <div className="fee-profile-body">

                    <div className="fee-avatar">

                        {fee.studentName.charAt(0)}

                    </div>

                    <h3>

                        {fee.studentName}

                    </h3>

                    <p>

                        {fee.rollNo}

                    </p>

                    <div className="fee-profile-grid">

                        <div>

                            <label>

                                Receipt No.

                            </label>

                            <span>

                                {fee.receiptNo}

                            </span>

                        </div>

                        <div>

                            <label>

                                Course

                            </label>

                            <span>

                                {fee.course}

                            </span>

                        </div>

                        <div>

                            <label>

                                Semester

                            </label>

                            <span>

                                {fee.semester}

                            </span>

                        </div>

                        <div>

                            <label>

                                Total Fee

                            </label>

                            <span>

                                ₹{fee.amount.toLocaleString()}

                            </span>

                        </div>

                        <div>

                            <label>

                                Paid Amount

                            </label>

                            <span>

                                ₹{fee.paid.toLocaleString()}

                            </span>

                        </div>

                        <div>

                            <label>

                                Due Amount

                            </label>

                            <span>

                                ₹{fee.due.toLocaleString()}

                            </span>

                        </div>

                        <div>

                            <label>

                                Payment Mode

                            </label>

                            <span>

                                {fee.paymentMode}

                            </span>

                        </div>

                        <div>

                            <label>

                                Payment Date

                            </label>

                            <span>

                                {fee.paymentDate}

                            </span>

                        </div>

                        <div>

                            <label>

                                Status

                            </label>

                            <span>

                                {fee.status}

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default FeeProfileModal;