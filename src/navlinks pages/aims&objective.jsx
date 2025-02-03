import React from "react";
import myStyles from "./aims&objective.module.css";

export function Aimsandobjective() {
    return (
        <div className={myStyles.rules}>
            <h1>Aims & Objective</h1>
            <div className={myStyles.sub_heading}>
                <h5>
                    The College is dedicated to nurturing a dynamic and enriching environment that fosters holistic student development, aligning with the evolving landscape of education. By introducing innovative academic programs and diverse co-curricular activities, we strive to create a vibrant and inspiring campus experience. Our core objectives include:
                </h5>
                <li>
                    Empowering students with value-based education by instilling core moral values and nurturing their potential in every dimension to shape a brighter future.
                </li>
                <li>
                    Ensuring students have ample access to the right resources while enhancing their engagement with modern ICT tools for a smarter, tech-driven learning experience.
                </li>
                <li>
                    Dedicated to empowering the rural student community of South 24 Parganas, West Bengal, with a broader vision, while uplifting female students to help them make a stronger impact on society.
                </li>
            </div>
        </div>
    );
}
