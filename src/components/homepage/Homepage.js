import Header from "./Header";
import PhoneIcon from "../../media/icons/Vector.svg";
import About from "./About";
import Menu from "./Menu";
import Special from "./Special";
import MenuList from "./MenuLists";
import Testimonials from "./Testimonials";
import BookATable from "./BookATable";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <div className="top-contacts">
        <div>
          <img src={PhoneIcon} alt="phone icon" />
          <a href="tel:012346789">+20123456789</a>
        </div>
        <p>
          Open hours: <time>Saturday-Tuesday 7:00AM - 9:00PM</time>
        </p>
      </div>
      <Header />
      <About />
      <Menu />
      <Special />
      <MenuList />
      <Testimonials />
      <BookATable />
      <Footer />
    </>
  );
};
export default Homepage;
