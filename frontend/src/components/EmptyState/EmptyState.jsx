/**
 * -----------------------------------------
 * Component : EmptyState
 * Project   : ClassPilot
 * Version   : 1.0.0
 * -----------------------------------------
 */

import "./EmptyState.css";

function EmptyState({

    title = "No Data Found",

    description = "There is nothing to display right now.",

    image = null,

    action = null,

}) {

    return (

        <div className="empty-state">

            {

                image && (

                    <img

                        src={image}

                        alt={title}

                        className="empty-image"

                    />

                )

            }

            <h2>{title}</h2>

            <p>{description}</p>

            {

                action &&

                <div className="empty-action">

                    {action}

                </div>

            }

        </div>

    );

}

export default EmptyState;