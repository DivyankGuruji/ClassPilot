/**
 * ==========================================
 * Component : FeeFilter
 * Project : ClassPilot
 * ==========================================
 */

import { FaSearch } from "react-icons/fa";

import "./FeeFilter.css";

function FeeFilter({

    search,
    setSearch,

    course,
    setCourse,

    status,
    setStatus,

}) {

    return (

        <div className="fee-filter">

            <div className="fee-search">

                <FaSearch />

                <input

                    type="text"

                    placeholder="Search by student, roll no or receipt..."

                    value={search}

                    onChange={(e) =>

                        setSearch(e.target.value)

                    }

                />

            </div>

            <select

                value={course}

                onChange={(e) =>

                    setCourse(e.target.value)

                }

            >

                <option value="All">

                    All Courses

                </option>

                <option value="B.Tech">

                    B.Tech

                </option>

                <option value="BCA">

                    BCA

                </option>

                <option value="B.Com">

                    B.Com

                </option>

                <option value="MCA">

                    MCA

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

                <option value="Paid">

                    Paid

                </option>

                <option value="Partial">

                    Partial

                </option>

                <option value="Pending">

                    Pending

                </option>

            </select>

        </div>

    );

}

export default FeeFilter;