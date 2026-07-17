/**
 * ==========================================
 * Component : FeeForm
 * Project : ClassPilot
 * ==========================================
 */

import "./AddFeeModal.css";

function FeeForm({

    formData,

    handleChange,

}) {

    return (

        <div className="fee-form">

            <div className="form-grid">

                <div className="form-group">

                    <label>

                        Receipt No.

                    </label>

                    <input

                        type="text"

                        name="receiptNo"

                        value={formData.receiptNo}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Student Name

                    </label>

                    <input

                        type="text"

                        name="studentName"

                        value={formData.studentName}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Roll No.

                    </label>

                    <input

                        type="text"

                        name="rollNo"

                        value={formData.rollNo}

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

                        Total Fee

                    </label>

                    <input

                        type="number"

                        name="amount"

                        value={formData.amount}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Paid Amount

                    </label>

                    <input

                        type="number"

                        name="paid"

                        value={formData.paid}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Due Amount

                    </label>

                    <input

                        type="number"

                        name="due"

                        value={formData.due}

                        onChange={handleChange}

                    />

                </div>

                <div className="form-group">

                    <label>

                        Payment Mode

                    </label>

                    <select

                        name="paymentMode"

                        value={formData.paymentMode}

                        onChange={handleChange}

                    >

                        <option>Cash</option>
                        <option>UPI</option>
                        <option>Card</option>
                        <option>Net Banking</option>

                    </select>

                </div>

                <div className="form-group">

                    <label>

                        Payment Date

                    </label>

                    <input

                        type="date"

                        name="paymentDate"

                        value={formData.paymentDate}

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

                        <option>Paid</option>
                        <option>Partial</option>
                        <option>Pending</option>

                    </select>

                </div>

            </div>

        </div>

    );

}

export default FeeForm;
