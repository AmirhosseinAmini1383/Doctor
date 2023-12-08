import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ColdExercise from "../Images/Image/cold-and-exercise.png";
import HealthStats from "../Images/Image/health-stats.png";
import DoctorTest from "../Images/Image/doctor-test.png";
import Cold from "../Images/Image/cold.png";
import User from "../Images/Image/User.png";
import "./MedicalAll.css";
import { Link } from "react-router-dom";
const MedicalAll = () => {
  return (
    <div className="container">
      <div className="medical-main">
        <Header />
        <div className="title-head">
          <h1>مطالب پزشکی</h1>
        </div>
        <div className="medical-all">
          <div className="medical-div">
            <Link to="/ColdExercise">
              <img
                className="medical-all-img"
                src={ColdExercise}
                alt="ColdExercise"
              />
              <p className="medical-all-p">
                آیا در زمان سرماخوردگی می‌توانم ورزش کنم؟
              </p>
            </Link>
            <p className="medical-all-lorem">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که…
            </p>
            <div className="medical-all-manager">
              <img src={User} alt="User" />
              <p>مدیرسایت</p>
            </div>
          </div>
          <div className="medical-div">
            <Link to="/HealthStats">
              <img
                className="medical-all-img"
                src={HealthStats}
                alt="HealthStats"
              />
              <p className="medical-all-p">
                ۱۰ شاخص سلامتی که حتما باید درباره‌ی خودتان بدانید
              </p>
            </Link>
            <p className="medical-all-lorem">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که…
            </p>
            <div className="medical-all-manager">
              <img src={User} alt="User" />
              <p>مدیرسایت</p>
            </div>
          </div>
          <div className="medical-div">
            <Link to="/DoctorTest">
              <img
                className="medical-all-img"
                src={DoctorTest}
                alt="DoctorTest"
              />
              <p className="medical-all-p">
                ۱۰ تست غربالگری مهم که برای تمام مردان ضروری‌اند
              </p>
            </Link>
            <p className="medical-all-lorem">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که…
            </p>
            <div className="medical-all-manager">
              <img src={User} alt="User" />
              <p>مدیرسایت</p>
            </div>
          </div>
          <div className="medical-div">
            <Link to="/Cold">
              <img className="medical-all-img" src={Cold} alt="Cold" />
              <p className="medical-all-p">
                چگونه بهترین دارو را برای درمان سرماخوردگی انتخاب کنیم؟
              </p>
            </Link>
            <p className="medical-all-lorem">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که…
            </p>
            <div className="medical-all-manager">
              <img src={User} alt="User" />
              <p>مدیرسایت</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default MedicalAll;
