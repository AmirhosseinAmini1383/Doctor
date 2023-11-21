import React from "react";
import "../Content-Medical/Medical.css";
import ColdExercise from "../Images/Image/cold-and-exercise.png";
import HealthStats from "../Images/Image/health-stats.png";
import DoctorTest from "../Images/Image/doctor-test.png";
import Cold from "../Images/Image/cold.png";
const Medical = () => {
  return (
    <div className="medical">
      <div className="medical-head">
        <h2>مطالب پزشکی</h2>
        <div>
          <p>نمایش همه</p>
        </div>
      </div>
      <div className="medical-Fdiv">
        <div>
          <img className="medical-img" src={ColdExercise} alt="ColdExercise" />
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
          <img className="medical-image" src={HealthStats} alt="HealthStats" />
          <p>۱۰ شاخص سلامتی که حتما باید...</p>
        </div>
        <div>
          <img className="medical-image" src={DoctorTest} alt="DoctorTest" />
          <p>۱۰ تست غربالگری مهم که برای...</p>
        </div>
        <div>
          <img className="medical-image" src={Cold} alt="Cold" />
          <p>چگونه بهترین دارو را برای درمان...</p>
        </div>
      </div>
    </div>
  );
};
export default Medical;
