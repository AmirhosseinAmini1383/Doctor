import React from "react";
import "../Content-Reservation/Reservation.css";
import online from "../Images/Image/online-doctor.png";
import medicalprescription from "../Images/Image/medical-prescription.png";
const Reservation = () => {
  return (
    <div className="reservation">
      <div>
        <p className="reservation-p">
          دریافت نوبت پزشک <span>عنوان پیشفرض</span>
        </p>
        <p className="p_">____________</p>
      </div>
      <div className="reservation_flex">
        <div className="reservation_img">
          <img className="img" src={online} alt="online" />
          <button className="reservation_btn">مشاوره آنلاین</button>
        </div>
        <div className="reservation_img">
          <img
            className="img"
            src={medicalprescription}
            alt="medicalprescription"
          />
          <button className="reservation_btn">مشاوره حضوری</button>
        </div>
      </div>
    </div>
  );
};
export default Reservation;
