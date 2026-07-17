/**
 * ==========================================
 * Component : DashboardCharts
 * Project   : ClassPilot
 * ==========================================
 */

import "./DashboardCharts.css";

function DashboardCharts() {

    return (

        <section className="dashboard-charts">

            <div className="chart-card">

                <div className="chart-header">

                    <h3>

                        Student Admissions

                    </h3>

                    <span>

                        Last 6 Months

                    </span>

                </div>

                <div className="chart-placeholder">

                    📈

                    <p>

                        Chart will be integrated here.

                    </p>

                </div>

            </div>

            <div className="chart-card">

                <div className="chart-header">

                    <h3>

                        Monthly Revenue

                    </h3>

                    <span>

                        Current Session

                    </span>

                </div>

                <div className="chart-placeholder">

                    💰

                    <p>

                        Revenue chart will appear here.

                    </p>

                </div>

            </div>

        </section>

    );

}

export default DashboardCharts;