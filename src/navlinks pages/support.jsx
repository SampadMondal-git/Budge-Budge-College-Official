import React from "react";
import myStyles from "./support.module.css";
import GooglePay from "../images/GooglePay_QR.png";
export function Support() {
  return (
    <div className={myStyles.container}>
      <h2 className={myStyles.section_title}>Support the Developer</h2>
      <div className={myStyles.google_pay_qr}>
        <img src={GooglePay} alt="Google Pay QR" width={300} />
        <div className={myStyles.point}>
          <p>
            Every contribution, no matter how small, is deeply appreciated and
            goes directly toward making this app better for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
