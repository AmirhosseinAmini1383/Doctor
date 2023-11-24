import React from "react";
import imgDocter from "../Images/Image/doctor.png";
import "./ContentHead.css";
const ContentHead = () => {
  return (
    <div className="content">
      <div className="content-Intro">
        <img className="img-docter" src={imgDocter} alt="docter" />
      </div>
      <div className="content-about">
        <p className="docter-p">
          نوبت دهی و مشاوره آنلاین با <span>دکتر کاظم خوانساری</span>
        </p>

        <p className="tag-p">______</p>

        <p className="lorem">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد.
        </p>
        <button className="btn">دریافت نوبت</button>
      </div>
    </div>
  );
};
export default ContentHead;
