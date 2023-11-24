import React from "react";
import "./Comment.css";
import man from "../Images/Image/mancomment.png";
import woman from "../Images/Image/womancomment.png";

const Comment = () => {
  return (
    <div className="comment-body">
      <div>
        <p className="comment-p">
          نظرات بیماران <span>عنوان پیشفرض</span>
        </p>
        <div className="div-hr10"> </div>
      </div>
      <div className="comments">
        <div className="comment-div">
          <div className="comment-bio">
            <img className="comment-img" src={man} alt="man" />
            <p className="comments-p">مهدی شجاری</p>
          </div>
          <div className="comment-lorem">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
        <div className="comment-div">
          <div className="comment-bio">
            <img className="comment-img" src={woman} alt="woman" />
            <p className="comments-p">باران رادفر</p>
          </div>
          <div className="comment-lorem">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comment;
