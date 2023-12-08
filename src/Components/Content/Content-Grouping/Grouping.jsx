import React from "react";
import center from "../../../Images/Image/center.png";
import drug from "../../../Images/Image/drug.png";
import icmezaj from "../../../Images/Image/ic-mezaj.png";
import blog from "../../../Images/Image/blog.png";
import ictest from "../../../Images/Image/ic-test.png";
import medicalteam from "../../../Images/Image/medical-team.png";
import hourglass from "../../../Images/Image/hourglass.png";
import money from "../../../Images/Image/money.png";
import "./Grouping.css";
const Grouping = () => {
  return (
    <div className="grouping">
      <div>
        <p className="grouping-p">
          دسته بندی موضوعات <span>عنوان پیشفرض</span>
        </p>
        <div className="div-hr10"> </div>
      </div>
      <div className="grouping-div">
        <div>
          <img className="group-img" src={center} alt="center" />
          <p className="group-p">دریافت نوبت</p>
        </div>
        <div>
          <img className="group-img" src={drug} alt="drug" />
          <p className="group-p">نسخه دارو</p>
        </div>
        <div>
          <img className="group-img" src={icmezaj} alt="icmezaj" />
          <p className="group-p">طب سنتی</p>
        </div>
        <div>
          <img className="group-img" src={blog} alt="blog" />
          <p className="group-p">مقالات آموزشی</p>
        </div>
        <div>
          <img className="group-img" src={ictest} alt="ictest" />
          <p className="group-p">آزمایشات پزشکی</p>
        </div>
      </div>
      <div className="part-div">
        <div className="section-div">
          <img className="group-img" src={medicalteam} alt="medicalteam" />
          <p className="group-p"> تیم پزشکی مجرب </p>
          <p className="group-lorem">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className="section-div">
          <img className="group-img" src={hourglass} alt="hourglass" />
          <p className="group-p"> پاسخگویی سریع </p>
          <p className="group-lorem">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <div className="section-div">
          <img className="group-img" src={money} alt="money" />
          <p className="group-p"> کمترین میزان هزینه </p>
          <p className="group-lorem">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
      </div>
    </div>
  );
};
export default Grouping;
