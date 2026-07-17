import "./RecentActivity.css";

function RecentActivity() {

    const activities = [
        "New student registered",
        "Fees received",
        "Homework uploaded",
        "Attendance marked",
    ];

    return (

        <div className="activity-list">

            {

                activities.map((item, index) => (

                    <div
                        key={index}
                        className="activity-item"
                    >

                        <div className="activity-dot"></div>

                        <span>{item}</span>

                    </div>

                ))

            }

        </div>

    );
}

export default RecentActivity;