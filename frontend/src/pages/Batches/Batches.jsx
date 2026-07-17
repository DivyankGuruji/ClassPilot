/**
 * ==========================================
 * Page : Batches
 * Project : ClassPilot
 * ==========================================
 */

import {

    useMemo,
    useState,

} from "react";

import { useBatchContext } from "../../context/BatchContext";

import BatchHeader from "./BatchHeader";
import BatchFilter from "./BatchFilter";
import BatchTable from "./BatchTable";

import AddBatchModal from "./components/AddBatchModal/AddBatchModal";
import EditBatchModal from "./components/EditBatchModal/EditBatchModal";
import BatchProfileModal from "./components/BatchProfileModal/BatchProfileModal";

import DeleteConfirmationModal from "../Teachers/components/DeleteConfirmationModal/DeleteConfirmationModal";

import "./Batches.css";

function Batches() {

    const {

        batches,

        loading,

        error,

        addBatch,

        updateBatch,

        deleteBatch,

    } = useBatchContext();

    const [search, setSearch] = useState("");

    const [course, setCourse] = useState("All");

    const [status, setStatus] = useState("All");

    const [selectedBatch, setSelectedBatch] = useState(null);

    const [addModalOpen, setAddModalOpen] = useState(false);

    const [editModalOpen, setEditModalOpen] = useState(false);

    const [profileOpen, setProfileOpen] = useState(false);

    const [deleteOpen, setDeleteOpen] = useState(false);

    const filteredBatches = useMemo(() => {

        return batches.filter((batch) => {

            const matchesSearch =

                batch.batchName
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                batch.batchCode
                    .toLowerCase()
                    .includes(search.toLowerCase()) ||

                batch.teacher
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesCourse =

                course === "All"

                    ? true

                    : batch.course === course;

            const matchesStatus =

                status === "All"

                    ? true

                    : batch.status === status;

            return (

                matchesSearch &&
                matchesCourse &&
                matchesStatus

            );

        });

    }, [

        batches,

        search,

        course,

        status,

    ]);

    const handleAddBatch = async (batch) => {

        await addBatch(batch);

        setAddModalOpen(false);

    };

    const handleEditBatch = (batch) => {

        setSelectedBatch(batch);

        setEditModalOpen(true);

    };

    const handleUpdateBatch = async (batch) => {

        await updateBatch(batch);

        setEditModalOpen(false);

        setSelectedBatch(null);

    };

    const handleViewBatch = (batch) => {

        setSelectedBatch(batch);

        setProfileOpen(true);

    };

    const handleDeleteClick = (batch) => {

        setSelectedBatch(batch);

        setDeleteOpen(true);

    };

    const handleDeleteBatch = async () => {

        if (!selectedBatch) return;

        await deleteBatch(selectedBatch.id);

        setDeleteOpen(false);

        setSelectedBatch(null);

    };

    if (loading) {

        return <h2>Loading Batches...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <div className="batches-page">

            <BatchHeader

                onAddBatch={() =>

                    setAddModalOpen(true)

                }

            />

            <BatchFilter

                search={search}
                setSearch={setSearch}

                course={course}
                setCourse={setCourse}

                status={status}
                setStatus={setStatus}

            />

            <BatchTable

                batches={filteredBatches}

                onView={handleViewBatch}

                onEdit={handleEditBatch}

                onDelete={handleDeleteClick}

            />

            <AddBatchModal

                isOpen={addModalOpen}

                onClose={() =>

                    setAddModalOpen(false)

                }

                onSave={handleAddBatch}

            />

            <EditBatchModal

                isOpen={editModalOpen}

                batch={selectedBatch}

                onClose={() => {

                    setEditModalOpen(false);

                    setSelectedBatch(null);

                }}

                onUpdate={handleUpdateBatch}

            />

            <BatchProfileModal

                isOpen={profileOpen}

                batch={selectedBatch}

                onClose={() => {

                    setProfileOpen(false);

                    setSelectedBatch(null);

                }}

            />

            <DeleteConfirmationModal

                isOpen={deleteOpen}

                title="Delete Batch"

                message={`Are you sure you want to delete "${selectedBatch?.batchName}"?`}

                onCancel={() => {

                    setDeleteOpen(false);

                    setSelectedBatch(null);

                }}

                onConfirm={handleDeleteBatch}

            />

        </div>

    );

}

export default Batches;