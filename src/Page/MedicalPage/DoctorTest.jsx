import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Coldexercise from "../../Images/Image/cold-and-exercise.png";
import ArrowUp from "../../Components/ArrowUp/ArrowUp";
import Healthstats from "../../Images/Image/health-stats.png";
import Doctortest from "../../Images/Image/doctor-test.png";
import User from "../../Images/Image/User.png";
import Cold from "../../Images/Image/cold.png";
import Instagram from "../../Images/Icon/instagram.png";
import Telegram from "../../Images/Icon/telegram.png";
import "./MedicalAdvicePage.css";
import { Link } from "react-router-dom";
const DoctorTest = () => {
  return (
    <div className="container">
      <ArrowUp />
      <Header />
      <div className="medical-advice">
        <div className="maindiv">
          <div className="title-div">
            <h1 className="title">
              ۱۰ تست غربالگری مهم که برای تمام مردان ضروری‌اند
            </h1>
            <img className="title-img" src={Doctortest} alt="Doctortest" />
            <p className="title-p">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن
              ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
              گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
              که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
              متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت
              و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
              طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
              الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
              صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
              شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
              دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
              اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی
              نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
              متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
              شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود
              ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال
              و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
              افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
              خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان
              امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت
              تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
              و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
              قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
              چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
              روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
              تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
              کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده،
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت
              بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
              پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که
              تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
              رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی
              سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار
              گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
              با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
              مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی
              مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
              باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت
              فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری
              را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
              زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
              دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
              زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
              پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
              زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
              متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
              ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
              شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
              موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="manager">
              <p className="manager-p">مدیر سایت</p>
              <img className="manager-img" src={User} alt="User" />
            </div>
            <div className="point-of-view">
              <p className="point-of-view-title">دیدگاهتان را بنویسید</p>
              <p className="point-of-view-p">
                نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری
                شده‌اند *
              </p>
              <p className="point-of-view-p">دیدگاه *</p>
              <div>
                <textarea
                  className="point-of-view-textarea"
                  rows="10"
                  cols="100"
                ></textarea>
              </div>
              <div className="point-of-view-flex">
                <label className="point-of-view-label">نام (الزامی)</label>
                <input
                  type="text"
                  className="point-of-view-text"
                  placeholder="نام خود را وارد کنید"
                />
                <label className="point-of-view-label">ایمیل (الزامی)</label>
                <input
                  type="text"
                  className="point-of-view-text"
                  placeholder="ایمیل خود را وارد کنید"
                />
                <label className="point-of-view-label">وبسایت</label>
                <input
                  type="text"
                  className="point-of-view-text"
                  placeholder="آدرس وبسایت خود را وارد کنید"
                />
              </div>
              <div className="div-btn">
                <button className="point-of-view-btn">فرستادن دیدگاه</button>
              </div>
            </div>
          </div>
          <div className="side-div">
            <div className="side-news">
              <h4 className="news-border">تازه ترین مطالب</h4>
              <div className="side-flex">
                <Link to="/ColdExercise">
                  <img
                    className="side-img"
                    src={Coldexercise}
                    alt="Coldexercise"
                  />
                </Link>
                <p className="side-p">
                  آیا در زمان سرماخوردگی می‌توانم ورزش کنم؟
                </p>
              </div>
              <div className="side-flex">
                <Link to="/HealthStats">
                  <img
                    className="side-img"
                    src={Healthstats}
                    alt="HealthStats"
                  />
                </Link>
                <p className="side-p">
                  ۱۰ شاخص سلامتی که حتما باید درباره‌ی خودتان بدانید
                </p>
              </div>
              <div className="side-flex">
                <Link to="/DoctorTest">
                  <img className="side-img" src={Doctortest} alt="DoctorTest" />
                </Link>
                <p className="side-p">
                  ۱۰ تست غربالگری مهم که برای تمام مردان ضروری‌اند
                </p>
              </div>
              <div className="side-flex">
                <Link to="/Cold">
                  <img className="side-img" src={Cold} alt="Cold" />
                </Link>
                <p className="side-p">
                  چگونه بهترین دارو را برای درمان سرماخوردگی انتخاب کنیم؟
                </p>
              </div>
            </div>
            <div className="side-social">
              <p className="social-border">شبکه های مجازی ما</p>
              <div className="social-div-img">
                <img
                  className="social-img instagram"
                  src={Instagram}
                  alt="instagram"
                />
                <img
                  className="social-img telegram"
                  src={Telegram}
                  alt="telegram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default DoctorTest;
