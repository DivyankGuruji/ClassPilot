/**
 * -----------------------------------------
 * Component : StudentFilter
 * Project   : ClassPilot
 * Version   : 1.0.0
 * -----------------------------------------
 */

import SearchBar from "../../components/SearchBar/SearchBar";

function StudentFilter({

    search,

    setSearch,

    batch,

    setBatch,

}) {

    return (

        <div className="student-filter">

            <SearchBar

                value={search}

                onChange={(e) => setSearch(e.target.value)}

                placeholder="Search Student..."

                width="320px"

            />

            <select

                className="batch-filter"

                value={batch}

                onChange={(e) => setBatch(e.target.value)}

            >

                <option value="All">

                    All Batches

                </option>

                <option value="Batch A">

                    Batch A

                </option>

                <option value="Batch B">

                    Batch B

                </option>

                <option value="Batch C">

                    Batch C

                </option>

            </select>

        </div>

    );

}

export default StudentFilter;