/**
 * ==========================================
 * Component : TeacherFilter
 * Project : ClassPilot
 * ==========================================
 */

import "./TeacherFilter.css";

function TeacherFilter({

    search,

    setSearch,

    department,

    setDepartment,

    status,

    setStatus,

}) {

    return (

        <div className="teacher-filter">

            <input

                type="text"

                placeholder="Search by teacher name..."

                value={search}

                onChange={(e) =>

                    setSearch(e.target.value)

                }

            />

            <select

                value={department}

                onChange={(e) =>

                    setDepartment(e.target.value)

                }

            >

                <option value="All">

                    All Departments

                </option>

                <option value="Science">

                    Science

                </option>

                <option value="Mathematics">

                    Mathematics

                </option>

                <option value="Computer Science">

                    Computer Science

                </option>

                <option value="English">

                    English

                </option>

                <option value="Chemistry">

                    Chemistry

                </option>

            </select>

            <select

                value={status}

                onChange={(e) =>

                    setStatus(e.target.value)

                }

            >

                <option value="All">

                    All Status

                </option>

                <option value="Active">

                    Active

                </option>

                <option value="On Leave">

                    On Leave

                </option>

            </select>

        </div>

    );

}

export default TeacherFilter;