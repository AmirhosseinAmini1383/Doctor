import React from "react";
import Header from "../../Components/Header/Header";
import ContentHead from "../../Components/Content/ContentHead/ContentHead";
import Reservation from "../../Components/Content/Content-Reservation/Reservation";
import Grouping from "../../Components/Content/Content-Grouping/Grouping";
import Data from "../../Components/Content/Content-AxiosApi/Data";
import DocNotif from "../../Components/Content/Content-Doc-Notif/DocNotif";
import Comment from "../../Components/Content/Content-Comment/Comment";
import Medical from "../../Components/Content/Content-Medical/Medical";
import Footer from "../../Components/Footer/Footer";
import "./ResponsiveHomePage/MainResponsive.css";
import "./ResponsiveHomePage/Tablet.css";
import "./ResponsiveHomePage/Mobile.css";
import "./Home.css";
import ArrowUp from "../../Components/ArrowUp/ArrowUp";
const Home = () => {
  return (
    <div className="container">
      <ArrowUp />
      <Header />
      <ContentHead />
      <Reservation />
      <Grouping />
      <Data />
      <DocNotif />
      <Comment />
      <Medical />
      <Footer />
    </div>
  );
};
export default Home;
