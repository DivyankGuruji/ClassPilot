/**
 * ==========================================
 * Page : Fees
 * Project : ClassPilot
 * ==========================================
 */

import {

    useMemo,
    useState,

} from "react";

import { useFeeContext } from "../../context/FeeContext";

import FeeHeader from "./FeeHeader";
import FeeFilter from "./FeeFilter";
import FeeTable from "./FeeTable";

import AddFeeModal from "./components/AddFeeModal/AddFeeModal";
import EditFeeModal from "./components/EditFeeModal/EditFeeModal";
import FeeProfileModal from "./components/FeeProfileModal/FeeProfileModal";

function Fees() {

    const {

        fees,

        loading,

        error,

        addFee,

        updateFee,

        deleteFee,

    } = useFeeContext();

    const [search, setSearch] = useState("");

    const [course, setCourse] = useState("All");

    const [status, setStatus] = useState("All");

    const [selectedFee, setSelectedFee] = useState(null);

    const [addModalOpen, setAddModalOpen] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);

    const [profileOpen, setProfileOpen] = useState(false);

    const filteredFees = useMemo(() => {

        return fees.filter((fee) => {

            const matchesSearch =

                fee.studentName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                fee.rollNo
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                fee.receiptNo
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCourse =

                course === "All"

                    ? true

                    : fee.course === course;

            const matchesStatus =

                status === "All"

                    ? true

                    : fee.status === status;

            return (

                matchesSearch &&
                matchesCourse &&
                matchesStatus

            );

        });

    }, [

        fees,

        search,

        course,

        status,

    ]);

    const handleAddFee = async (fee) => {

        await addFee(fee);

        setAddModalOpen(false);

    };

    const handleEditFee = (fee) => {

        setSelectedFee(fee);

        setEditModalOpen(true);

    };

    const handleUpdateFee = async (fee) => {

        await updateFee(fee);

        setEditModalOpen(false);

        setSelectedFee(null);

    };

    const handleViewFee = (fee) => {

        setSelectedFee(fee);

        setProfileOpen(true);

    };

    const handleDeleteFee = async (fee) => {

        const confirmDelete = window.confirm(

            `Delete fee record of ${fee.studentName}?`

        );

        if (!confirmDelete) return;

        await deleteFee(fee.id);

    };

    if (loading) {

        return <h2>Loading Fees...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <div className="fees-page">

            <FeeHeader

                onAddFee={() =>

                    setAddModalOpen(true)

                }

            />

            <FeeFilter

                search={search}
                setSearch={setSearch}

                course={course}
                setCourse={setCourse}

                status={status}
                setStatus={setStatus}

            />

            <FeeTable

                fees={filteredFees}

                onView={handleViewFee}

                onEdit={handleEditFee}

                onDelete={handleDeleteFee}

            />

            <AddFeeModal

                isOpen={addModalOpen}

                onClose={() =>

                    setAddModalOpen(false)

                }

                onSave={handleAddFee}

            />

            <EditFeeModal

                isOpen={editModalOpen}

                fee={selectedFee}

                onClose={() => {

                    setEditModalOpen(false);

                    setSelectedFee(null);

                }}

                onUpdate={handleUpdateFee}

            />

            <FeeProfileModal

                isOpen={profileOpen}

                fee={selectedFee}

                onClose={() => {

                    setProfileOpen(false);

                    setSelectedFee(null);

                }}

            />

        </div>

    );

}

export default Fees;