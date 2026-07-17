import { FaPlus } from "react-icons/fa";

import Button from "../../components/Button/Button";

function StudentHeader({

    onAddStudent,

}) {

    return (

        <div className="student-header">

            <div>

                <h1>Students</h1>

                <p>

                    Manage all students from one place.

                </p>

            </div>

            <Button

                text="Add Student"

                leftIcon={<FaPlus />}

                onClick={onAddStudent}

            />

        </div>

    );

}

export default StudentHeader;