/**
 * ==========================================
 * Component : BatchFilter
 * Project : ClassPilot
 * ==========================================
 */

import { FaSearch } from "react-icons/fa";

import "./BatchFilter.css";

function BatchFilter({

    search,
    setSearch,

    course,
    setCourse,

    status,
    setStatus,

}) {

    return (

        <div className="batch-filter">

            <div className="batch-search">

                <FaSearch />

                <input

                    type="text"

                    placeholder="Search batch..."

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

                <option value="Active">

                    Active

                </option>

                <option value="Inactive">

                    Inactive

                </option>

            </select>

        </div>

    );

}

export default BatchFilter;