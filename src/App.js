import DocNotif from "./Content-Doc-Notif/DocNotif";
import Grouping from "./Content-Grouping/Grouping";
import Reservation from "./Content-Reservation/Reservation";
import Content from "./Content/Content";
import Header from "./Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Reservation />
      <Grouping />
      <DocNotif />
    </div>
  );
}

export default App;
