import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import Select from "../../../../components/Select/Select";

import {
    COURSE_OPTIONS,
    BATCH_OPTIONS,
} from "../../../../constants";

import "./StudentForm.css";

function StudentForm({

    student,

    setStudent,

    onSubmit,

    submitText,

}) {

    const handleChange = (e) => {

        setStudent({

            ...student,

            [e.target.name]: e.target.value

        });

    };

    return (

        <form

            className="student-form"

            onSubmit={onSubmit}

        >

            <Input

                label="Full Name"

                name="fullName"

                value={student.fullName}

                onChange={handleChange}

                required

            />

            <Input

                label="Roll Number"

                name="rollNumber"

                value={student.rollNumber}

                onChange={handleChange}

            />

            <Input

                label="Admission Number"

                name="admissionNumber"

                value={student.admissionNumber}

                onChange={handleChange}

            />

            <Input

                label="Father Name"

                name="fatherName"

                value={student.fatherName}

                onChange={handleChange}

            />

            <Input

                label="Mother Name"

                name="motherName"

                value={student.motherName}

                onChange={handleChange}

            />

            <Input

                label="Mobile"

                name="mobile"

                value={student.mobile}

                onChange={handleChange}

            />

            <Input

                label="Parent Mobile"

                name="parentMobile"

                value={student.parentMobile}

                onChange={handleChange}

            />

            <Input

                label="Email"

                type="email"

                name="email"

                value={student.email}

                onChange={handleChange}

            />

            <Select

                label="Course"

                name="course"

                value={student.course}

                options={COURSE_OPTIONS}

                onChange={handleChange}

            />

            <Select

                label="Batch"

                name="batch"

                value={student.batch}

                options={BATCH_OPTIONS}

                onChange={handleChange}

            />

            <Input

                label="Fees"

                type="number"

                name="fees"

                value={student.fees}

                onChange={handleChange}

            />

            <Input

                label="Joining Date"

                type="date"

                name="joiningDate"

                value={student.joiningDate}

                onChange={handleChange}

            />

            <div className="student-form-full">

                <Input

                    label="Address"

                    name="address"

                    value={student.address}

                    onChange={handleChange}

                />

            </div>

            <div className="student-form-buttons">

                <Button

                    type="submit"

                    variant="success"

                    text={submitText}

                />

            </div>

        </form>

    );

}

export default StudentForm;