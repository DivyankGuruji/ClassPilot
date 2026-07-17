/**
 * ==========================================
 * Context : Batch Context
 * Project : ClassPilot
 * ==========================================
 */

import {

    createContext,
    useContext,
    useEffect,
    useState,

} from "react";

import {

    fetchBatches,
    createBatch,
    editBatch,
    removeBatch,

} from "../pages/Batches/service/batchService";

const BatchContext = createContext();

export function BatchProvider({ children }) {

    const [batches, setBatches] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        loadBatches();

    }, []);

    const loadBatches = async () => {

        try {

            setLoading(true);

            const data = await fetchBatches();

            setBatches(data);

            setError(null);

        }

        catch (err) {

            console.error(err);

            setError("Failed to load batches.");

        }

        finally {

            setLoading(false);

        }

    };

    const addBatch = async (batch) => {

        const newBatch = await createBatch(batch);

        setBatches((prev) => [

            ...prev,

            newBatch,

        ]);

    };

    const updateBatch = async (batch) => {

        const updated = await editBatch(batch);

        setBatches((prev) =>

            prev.map((item) =>

                item.id === updated.id

                    ? updated

                    : item

            )

        );

    };

    const deleteBatch = async (id) => {

        await removeBatch(id);

        setBatches((prev) =>

            prev.filter((item) => item.id !== id)

        );

    };

    return (

        <BatchContext.Provider

            value={{

                batches,

                loading,

                error,

                addBatch,

                updateBatch,

                deleteBatch,

                refreshBatches: loadBatches,

            }}

        >

            {children}

        </BatchContext.Provider>

    );

}

export function useBatchContext() {

    return useContext(BatchContext);

}