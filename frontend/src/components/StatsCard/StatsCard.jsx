/**
 * ==========================================
 * Component : StatsCard
 * Project : ClassPilot
 * ==========================================
 */

import "./StatsCard.css";

function StatsCard({

    title,

    value,

    icon,

    color,

    growth,

}) {

    return (

        <div className="stats-card">

            <div className="stats-content">

                <p className="stats-title">

                    {title}

                </p>

                <h2 className="stats-value">

                    {value}

                </h2>

                {

                    growth && (

                        <span className="stats-growth">

                            {growth}

                        </span>

                    )

                }

            </div>

            <div

                className="stats-icon"

                style={{

                    background:color,

                }}

            >

                {icon}

            </div>

        </div>

    );

}

export default StatsCard;