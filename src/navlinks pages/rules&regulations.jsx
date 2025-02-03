import React from "react";
import myStyles from "./rules&regulations.module.css";

export function Rulesandregulations() {
    return (
        <div className={myStyles.rules}>
            <h1>Campus Rules & Regulations</h1>
            <div className={myStyles.regulations}>
                <p>
                    Students must uphold strict discipline and decorum at all times within
                    classrooms, the college office, laboratories, the library, and the
                    entire campus. This is essential not only for their own growth but
                    also to preserve the institution’s esteemed reputation in the
                    community. They are expected to conduct themselves with utmost dignity
                    and respect, ensuring complete silence while walking down the stairs,
                    passing through corridors, and moving inside classrooms during off
                    periods. Any deviation from these principles will not be tolerated.
                </p>
                <div className={myStyles.sub_heading}>
                    <h5>
                        However, every student must adhere to the following guidelines with
                        utmost seriousness and responsibility:
                    </h5>
                    <li>
                        Students must always show the highest level of respect and courtesy
                        towards faculty members and fellow students, both within the college
                        premises and beyond.
                    </li>
                    <li>
                        Students must be in class when the bell rings, attend regularly, and need permission to enter or leave.
                    </li>
                    <li>
                        Loitering in the corridors is strictly forbidden and will not be
                        tolerated under any circumstances.
                    </li>
                    <li>
                        When assembled, each class must take collective responsibility for the
                        behavior and discipline of its members.
                    </li>
                    <li>
                        In the absence of a teacher, students must maintain strict discipline
                        and order to ensure that other ongoing classes remain undisturbed.
                    </li>
                    <li>
                        Students are strictly prohibited from using any unfair means during
                        examinations. Any violation will result in serious consequences.
                    </li>
                    <li>
                        Any form of unruly behavior or misconduct within the college premises
                        is strictly prohibited and will be dealt with severely.
                    </li>
                    <li>
                        College property, including furniture, books, and other resources,
                        must be handled with the utmost care and responsibility. Any damage or
                        misuse will not be tolerated.
                    </li>
                    <li>
                        Gossiping or any form of noise in the library is strictly prohibited
                        to maintain a quiet and focused environment for all students.
                    </li>
                    <li>
                        Any breach of discipline by a student or group of students will be
                        taken very seriously and addressed with strict disciplinary action.
                    </li>
                </div>
            </div>
        </div>
    );
}
