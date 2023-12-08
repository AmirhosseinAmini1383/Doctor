import React from "react";
import Header from "../../Components/Header/Header";
import ContentHead from "../../Components/Content/ContentHead/ContentHead";
import Reservation from "../../Components/Content/Content-Reservation/Reservation";
import Grouping from "../../Components/Content/Content-Grouping/Grouping";
import DocNotif from "../../Components/Content/Content-Doc-Notif/DocNotif";
import Comment from "../../Components/Content/Content-Comment/Comment";
import Medical from "../../Components/Content/Content-Medical/Medical";
import Footer from "../../Components/Footer/Footer";
import "./ResponsiveHomePage/MainResponsive.css";
import "./ResponsiveHomePage/Tablet.css";
import "./ResponsiveHomePage/Mobile.css";
import "./Home.css";
const Home = () => {
  return (
    <div className="container">
      <Header />
      <ContentHead />
      <Reservation />
      <Grouping />
      <DocNotif />
      <Comment />
      <Medical />
      <Footer />
    </div>
  );
};
export default Home;
