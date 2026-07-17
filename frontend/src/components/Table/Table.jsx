/**
 * -----------------------------------------
 * Component : Table
 * Project   : ClassPilot
 * Version   : 1.0.0
 * -----------------------------------------
 */

import "./Table.css";

function Table({

    columns = [],

    data = [],

    renderActions,

    emptyMessage = "No Data Found",

}) {

    return (

        <div className="table-container">

            <table className="custom-table">

                <thead>

                    <tr>

                        {

                            columns.map((column) => (

                                <th key={column.key}>

                                    {column.label}

                                </th>

                            ))

                        }

                        {

                            renderActions &&

                            <th>Actions</th>

                        }

                    </tr>

                </thead>

                <tbody>

                    {

                        data.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={
                                        renderActions
                                            ? columns.length + 1
                                            : columns.length
                                    }
                                    className="table-empty"
                                >

                                    {emptyMessage}

                                </td>

                            </tr>

                        ) : (

                            data.map((row, index) => (

                                <tr key={index}>

                                    {

                                        columns.map((column) => (

                                            <td key={column.key}>

                                                {row[column.key]}

                                            </td>

                                        ))

                                    }

                                    {

                                        renderActions && (

                                            <td>

                                                {renderActions(row)}

                                            </td>

                                        )

                                    }

                                </tr>

                            ))

                        )

                    }

                </tbody>

            </table>

        </div>

    );

}

export default Table;