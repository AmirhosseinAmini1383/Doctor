import React from "react";
import "./Medical.css";
import ColdExercise from "../../../Images/Image/cold-and-exercise.png";
import HealthStats from "../../../Images/Image//health-stats.png";
import DoctorTest from "../../../Images/Image/doctor-test.png";
import Cold from "../../../Images/Image/cold.png";
import { Link } from "react-router-dom";
const Medical = () => {
  return (
    <div className="medical">
      <div className="medical-head">
        <h2>مطالب پزشکی</h2>
        <div>
          <Link to="/medical">
            <p>نمایش همه</p>
          </Link>
        </div>
      </div>
      <div className="medical-Fdiv">
        <div>
          <Link to="/ColdExercise">
            <img
              className="medical-img"
              src={ColdExercise}
              alt="ColdExercise"
            />
          </Link>
        </div>
        <div>
          <h2 className="medical-h2">
            آیا در زمان سرماخوردگی می‌توانم ورزش کنم؟
          </h2>
          <p className="medical-lorem">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام...
          </p>
        </div>
      </div>
      <div className="medical-Sdiv">
        <div>
          <Link to="/HealthStats">
            <img
              className="medical-image"
              src={HealthStats}
              alt="HealthStats"
            />
          </Link>
          <p>۱۰ شاخص سلامتی که حتما باید...</p>
        </div>
        <div>
          <Link to="/DoctorTest">
            {" "}
            <img className="medical-image" src={DoctorTest} alt="DoctorTest" />
          </Link>
          <p>۱۰ تست غربالگری مهم که برای...</p>
        </div>
        <div>
          <Link to="/Cold">
            <img className="medical-image" src={Cold} alt="Cold" />
          </Link>
          <p>چگونه بهترین دارو را برای درمان...</p>
        </div>
      </div>
    </div>
  );
};
export default Medical;
