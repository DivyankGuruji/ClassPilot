/**
 * ==========================================
 * Component : TeacherProfileModal
 * Project : ClassPilot
 * ==========================================
 */

import Modal from "../../../../components/Modal/Modal";

import "./TeacherProfileModal.css";

function TeacherProfileModal({

    isOpen,

    teacher,

    onClose,

}) {

    if (!teacher) return null;

    return (

        <Modal

            isOpen={isOpen}

            onClose={onClose}

            title="Teacher Profile"

        >

            <div className="teacher-profile">

                <div className="profile-avatar">

                    {teacher.fullName.charAt(0)}

                </div>

                <h2>

                    {teacher.fullName}

                </h2>

                <p>

                    {teacher.subject}

                </p>

                <div className="profile-grid">

                    <div>

                        <label>

                            Employee ID

                        </label>

                        <span>

                            {teacher.employeeId}

                        </span>

                    </div>

                    <div>

                        <label>

                            Department

                        </label>

                        <span>

                            {teacher.department}

                        </span>

                    </div>

                    <div>

                        <label>

                            Qualification

                        </label>

                        <span>

                            {teacher.qualification}

                        </span>

                    </div>

                    <div>

                        <label>

                            Experience

                        </label>

                        <span>

                            {teacher.experience}

                        </span>

                    </div>

                    <div>

                        <label>

                            Mobile

                        </label>

                        <span>

                            {teacher.mobile}

                        </span>

                    </div>

                    <div>

                        <label>

                            Email

                        </label>

                        <span>

                            {teacher.email}

                        </span>

                    </div>

                    <div>

                        <label>

                            Salary

                        </label>

                        <span>

                            ₹ {teacher.salary}

                        </span>

                    </div>

                    <div>

                        <label>

                            Joining Date

                        </label>

                        <span>

                            {teacher.joiningDate}

                        </span>

                    </div>

                    <div>

                        <label>

                            Status

                        </label>

                        <span>

                            {teacher.status}

                        </span>

                    </div>

                    <div className="profile-address">

                        <label>

                            Address

                        </label>

                        <span>

                            {teacher.address}

                        </span>

                    </div>

                </div>

            </div>

        </Modal>

    );

}

export default TeacherProfileModal;