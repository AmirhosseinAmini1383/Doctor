import React from "react";
import "./Footer.css";
import Enamad from "../../Images/Image/enamad.png";
import Samandehi from "../../Images/Image/samandehi.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="div-hr"> </div>
      <div className="footer-div">
        <div className="footerinfo">
          <p className="biography">اطلاعات</p>
          <ul>
            <li className="footer-li">
              آدرس ایمیل :{" "}
              <span className="footer-info-span">sample@gmail.com</span>
            </li>
            <li className="footer-li">
              شماره تلفن 1 : <span className="footer-info-span">02198765</span>
            </li>
            <li className="footer-li">
              شماره تلفن 2 : <span className="footer-info-span">02185575</span>
            </li>
            <li className="footer-li">
              کد پستی : <span className="footer-info-span">7154623986</span>
            </li>
            <li className="footer-li">
              شعبه یک : <span className="footer-info-span">تهران ، صادقیه</span>
            </li>
            <li className="footer-li">
              شعبه دو :{" "}
              <span className="footer-info-span">تهران ، میدان انقلاب</span>
            </li>
          </ul>
        </div>
        <div className="footerbio">
          <p className="biography">همه چیز درباره ما</p>
          <p className="bio-lorem">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان و متخصصان را
            می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
            دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
            مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ، و با استفاده از طراحان گرافیک است
          </p>
        </div>
      </div>
      <div className="div-enamad">
        <img className="enamad" src={Enamad} alt="Enamad" />
        <img className="enamad" src={Samandehi} alt="Samandehi" />
      </div>
      <div className="footercopy">
        <p>&copy; تمامی حقوق این وبسایت متعلق به دکتر کاظم خوانساری میباشد</p>
      </div>
    </div>
  );
};
export default Footer;
