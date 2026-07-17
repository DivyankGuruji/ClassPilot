/**
 * ==========================================
 * Component : BatchForm
 * Project : ClassPilot
 * ==========================================
 */

import "./AddBatchModal.css";

function BatchForm({

    formData,

    handleChange,

}) {

    return (

        <div className="batch-form">

            <div className="form-grid">

                <div className="form-group">

                    <label>

                        Batch Code

                    </label>

                    <input

                        type="text"

                        name="batchCode"

                        value={formData.batchCode}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Batch Name

                    </label>

                    <input

                        type="text"

                        name="batchName"

                        value={formData.batchName}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Course

                    </label>

                    <select

                        name="course"

                        value={formData.course}

                        onChange={handleChange}

                    >

                        <option>B.Tech</option>
                        <option>BCA</option>
                        <option>B.Com</option>
                        <option>MCA</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Semester

                    </label>

                    <input

                        type="number"

                        name="semester"

                        value={formData.semester}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Teacher

                    </label>

                    <input

                        type="text"

                        name="teacher"

                        value={formData.teacher}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Students

                    </label>

                    <input

                        type="number"

                        name="students"

                        value={formData.students}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Room

                    </label>

                    <input

                        type="text"

                        name="room"

                        value={formData.room}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Timing

                    </label>

                    <input

                        type="text"

                        name="timing"

                        placeholder="09:00 AM - 10:30 AM"

                        value={formData.timing}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Start Date

                    </label>

                    <input

                        type="date"

                        name="startDate"

                        value={formData.startDate}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        End Date

                    </label>

                    <input

                        type="date"

                        name="endDate"

                        value={formData.endDate}

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

                        <option>Active</option>
                        <option>Inactive</option>

                    </select>

                </div>

            </div>

        </div>

    );

}

export default BatchForm;