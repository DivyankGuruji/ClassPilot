/**
 * ==========================================
 * Component : TeacherHeader
 * Project : ClassPilot
 * ==========================================
 */

import { FaPlus } from "react-icons/fa";

import "./TeacherHeader.css";

function TeacherHeader({ onAddTeacher }) {

    return (

        <div className="teacher-header">

            <div className="teacher-header-left">

                <h1>

                    Teachers

                </h1>

                <p>

                    Manage all teachers from one place.

                </p>

            </div>

            <button

                className="add-teacher-btn"

                onClick={onAddTeacher}

            >

                <FaPlus />

                <span>

                    Add Teacher

                </span>

            </button>

        </div>

    );

}

export default TeacherHeader;