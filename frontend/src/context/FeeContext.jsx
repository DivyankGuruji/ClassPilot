/**
 * ==========================================
 * Context : Fee Context
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

    fetchFees,
    createFee,
    editFee,
    removeFee,

} from "../pages/Fees/service/feeService";

const FeeContext = createContext();

export function FeeProvider({ children }) {

    const [fees, setFees] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {

        loadFees();

    }, []);

    const loadFees = async () => {

        try {

            setLoading(true);

            const data = await fetchFees();

            setFees(data);

            setError(null);

        }

        catch (err) {

            console.error(err);

            setError("Failed to load fee records.");

        }

        finally {

            setLoading(false);

        }

    };

    const addFee = async (fee) => {

        const newFee = await createFee(fee);

        setFees((prev) => [

            ...prev,

            newFee,

        ]);

    };

    const updateFee = async (fee) => {

        const updated = await editFee(fee);

        setFees((prev) =>

            prev.map((item) =>

                item.id === updated.id

                    ? updated

                    : item

            )

        );

    };

    const deleteFee = async (id) => {

        await removeFee(id);

        setFees((prev) =>

            prev.filter((item) => item.id !== id)

        );

    };

    return (

        <FeeContext.Provider

            value={{

                fees,

                loading,

                error,

                addFee,

                updateFee,

                deleteFee,

                refreshFees: loadFees,

            }}

        >

            {children}

        </FeeContext.Provider>

    );

}

export function useFeeContext() {

    return useContext(FeeContext);

}