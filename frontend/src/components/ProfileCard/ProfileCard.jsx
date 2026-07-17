/**
 * ==========================================
 * Component : ProfileCard
 * Project   : ClassPilot
 * Version   : 1.0.0
 * ==========================================
 */

import { FaUserCircle } from "react-icons/fa";

import "./ProfileCard.css";

function ProfileCard({

    image,

    title,

    subtitle,

    fields = []

}) {

    return (

        <div className="profile-card">

            {/* Header */}

            <div className="profile-header">

                {

                    image ?

                    (

                        <img

                            src={image}

                            alt={title}

                            className="profile-image"

                        />

                    )

                    :

                    (

                        <FaUserCircle

                            className="profile-avatar"

                        />

                    )

                }

                <h2>

                    {title}

                </h2>

                {

                    subtitle &&

                    (

                        <p>

                            {subtitle}

                        </p>

                    )

                }

            </div>

            {/* Body */}

            <div className="profile-body">

                {

                    fields.map((field,index)=>(

                        <div

                            key={index}

                            className="profile-item"

                        >

                            <span className="profile-label">

                                {field.label}

                            </span>

                            <span className="profile-value">

                                {

                                    field.value ||

                                    "-"

                                }

                            </span>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default ProfileCard;