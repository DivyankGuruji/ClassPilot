/**
 * ==========================================
 * Component : UpcomingClasses
 * Project   : ClassPilot
 * ==========================================
 */

import {
    FaClock,
    FaBookOpen,
    FaUserTie,
} from "react-icons/fa";

import "./UpcomingClasses.css";

const classes = [

    {
        id: 1,
        subject: "Mathematics",
        teacher: "Mr. Sharma",
        time: "09:00 AM",
        room: "Room 101",
        status: "Starting Soon",
    },

    {
        id: 2,
        subject: "Physics",
        teacher: "Mrs. Verma",
        time: "10:30 AM",
        room: "Lab 2",
        status: "Scheduled",
    },

    {
        id: 3,
        subject: "Chemistry",
        teacher: "Mr. Singh",
        time: "12:00 PM",
        room: "Room 204",
        status: "Scheduled",
    },

    {
        id: 4,
        subject: "Computer Science",
        teacher: "Ms. Gupta",
        time: "02:00 PM",
        room: "Computer Lab",
        status: "Scheduled",
    },

];

function UpcomingClasses() {

    return (

        <section className="upcoming-classes">

            <div className="section-header">

                <h3>

                    Upcoming Classes

                </h3>

            </div>

            <div className="classes-list">

                {

                    classes.map((item) => (

                        <div

                            key={item.id}

                            className="class-card"

                        >

                            <div className="class-subject">

                                <FaBookOpen />

                                <div>

                                    <h4>

                                        {item.subject}

                                    </h4>

                                    <p>

                                        {item.room}

                                    </p>

                                </div>

                            </div>

                            <div className="class-info">

                                <span>

                                    <FaUserTie />

                                    {item.teacher}

                                </span>

                                <span>

                                    <FaClock />

                                    {item.time}

                                </span>

                            </div>

                            <span className="class-status">

                                {item.status}

                            </span>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default UpcomingClasses;