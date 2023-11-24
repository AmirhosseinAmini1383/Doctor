import React from "react";
import Comment from "../Content-Comment/Comment";
import Medical from "../Content-Medical/Medical";
import DocNotif from "../Content-Doc-Notif/DocNotif";
import Grouping from "../Content-Grouping/Grouping";
import Reservation from "../Content-Reservation/Reservation";
import ContentHead from "../ContentHead/ContentHead";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Content = () => {
  return (
    <>
      <Header />
      <ContentHead />
      <Reservation />
      <Grouping />
      <DocNotif />
      <Comment />
      <Medical />
      <Footer />
    </>
  );
};
export default Content;
