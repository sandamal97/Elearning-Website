import "./App.css";
import Navibar from "./component/Navibar";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./component/TopHeader";
import CardSection from "./component/CardSection";
import Sectiontwo from "./component/Sectiontwo";
import Categories from "./component/Categories";
import Courses from "./component/Courses";
import Instructors from "./component/Instructors";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navibar />
      <TopHeader />
      <CardSection />
      <Sectiontwo />
      <Categories />
      <Courses />
      <Instructors />
      <Footer />
    </div>
  );
}

export default App;
