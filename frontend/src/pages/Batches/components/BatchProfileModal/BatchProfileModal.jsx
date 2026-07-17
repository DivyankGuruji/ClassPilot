/**
 * ==========================================
 * Component : BatchProfileModal
 * Project : ClassPilot
 * ==========================================
 */

import "./BatchProfileModal.css";

function BatchProfileModal({

    isOpen,

    batch,

    onClose,

}) {

    if (!isOpen || !batch) return null;

    return (

        <div className="modal-overlay">

            <div className="profile-modal">

                <div className="modal-header">

                    <h2>

                        Batch Details

                    </h2>

                    <button

                        onClick={onClose}

                    >

                        ✕

                    </button>

                </div>

                <div className="profile-body">

                    <div className="profile-avatar">

                        {batch.batchName.charAt(0)}

                    </div>

                    <h3>

                        {batch.batchName}

                    </h3>

                    <p>

                        {batch.batchCode}

                    </p>

                    <div className="profile-grid">

                        <div>

                            <label>Course</label>

                            <span>{batch.course}</span>

                        </div>

                        <div>

                            <label>Semester</label>

                            <span>{batch.semester}</span>

                        </div>

                        <div>

                            <label>Teacher</label>

                            <span>{batch.teacher}</span>

                        </div>

                        <div>

                            <label>Total Students</label>

                            <span>{batch.students}</span>

                        </div>

                        <div>

                            <label>Room</label>

                            <span>{batch.room}</span>

                        </div>

                        <div>

                            <label>Timing</label>

                            <span>{batch.timing}</span>

                        </div>

                        <div>

                            <label>Start Date</label>

                            <span>{batch.startDate}</span>

                        </div>

                        <div>

                            <label>End Date</label>

                            <span>{batch.endDate}</span>

                        </div>

                        <div>

                            <label>Status</label>

                            <span>{batch.status}</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default BatchProfileModal;