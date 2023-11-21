import Comment from "./Content-Comment/Comment";
import Medical from "./Content-Medical/Medical";
import DocNotif from "./Content-Doc-Notif/DocNotif";
import Grouping from "./Content-Grouping/Grouping";
import Reservation from "./Content-Reservation/Reservation";
import Content from "./Content/Content";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Reservation />
      <Grouping />
      <DocNotif />
      <Comment />
      <Medical />
      <Footer />
    </div>
  );
}

export default App;
