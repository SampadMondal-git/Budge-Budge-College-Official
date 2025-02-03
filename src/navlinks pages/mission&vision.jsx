import React from "react";
import myStyles from "./mission&vision.module.css";

export function Missionandvision() {
    return (
        <div className={myStyles.rules}>
            <h1>Mission & Vision</h1>
            <div className={myStyles.container}>
                <h5>Our Vision:</h5>
                <p>Empowering students to be self-reliant, fostering a deep love for knowledge, and offering inclusive education that transcends societal boundaries, ensuring they emerge as responsible, visionary citizens dedicated to the progress and well-being of their communities.
                </p>
                <h5>Our Mission:</h5>
                <p>
                    Our mission is to strive for excellence in higher education by seamlessly coordinating the efforts of teachers, students, and staff to foster both academic and extracurricular growth. We are dedicated to enhancing the delivery of education, cultivating a progressive, dynamic, and analytical mindset in our students, empowering them to become responsible citizens. Additionally, we champion gender equality by prioritizing women's education, empowering them to lead and thrive in a rapidly evolving world.
                </p>
            </div>
        </div>
    );
}
