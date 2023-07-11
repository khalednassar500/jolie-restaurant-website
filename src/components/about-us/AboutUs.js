import Header from "./Header";
import PhoneIcon from "../../media/icons/Vector.svg";

const AboutUs = () => {
  return (
    <div className="about-us">
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
    </div>
  );
};

export default AboutUs;
