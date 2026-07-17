/**
 * ==========================================
 * Component : TeacherForm
 * Project : ClassPilot
 * ==========================================
 */

import "./AddTeacherModal.css";

function TeacherForm({

    formData,

    handleChange,

}) {

    return (

        <div className="teacher-form">

            <div className="form-grid">

                <div className="form-group">

                    <label>

                        Employee ID

                    </label>

                    <input

                        name="employeeId"

                        value={formData.employeeId}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Full Name

                    </label>

                    <input

                        name="fullName"

                        value={formData.fullName}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Department

                    </label>

                    <input

                        name="department"

                        value={formData.department}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Subject

                    </label>

                    <input

                        name="subject"

                        value={formData.subject}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Qualification

                    </label>

                    <input

                        name="qualification"

                        value={formData.qualification}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Experience

                    </label>

                    <input

                        name="experience"

                        value={formData.experience}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Mobile

                    </label>

                    <input

                        name="mobile"

                        value={formData.mobile}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Email

                    </label>

                    <input

                        name="email"

                        value={formData.email}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Salary

                    </label>

                    <input

                        type="number"

                        name="salary"

                        value={formData.salary}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Joining Date

                    </label>

                    <input

                        type="date"

                        name="joiningDate"

                        value={formData.joiningDate}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Status

                    </label>

                    <select

                        name="status"

                        value={formData.status}

                        onChange={handleChange}

                    >

                        <option>

                            Active

                        </option>

                        <option>

                            On Leave

                        </option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Address

                    </label>

                    <textarea

                        rows="3"

                        name="address"

                        value={formData.address}

                        onChange={handleChange}

                    />

                </div>

            </div>

        </div>

    );

}

export default TeacherForm;