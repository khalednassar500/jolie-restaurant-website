import ABOUT1 from "../../media/images/about1.svg";
import ABOUT2 from "../../media/images/about2.svg";

const About = () => {
  return (
    <section className="h-about">
      <div className="h-about-img">
        <img src={ABOUT1} alt="resturant" />
        <img src={ABOUT2} alt="man cut food" />
      </div>
      <div className="h-about-text">
        <h2 className="title">
          <span className="title-m">About us</span>
          <span className="title-t1">
            OUR <span className="title-t2">STORY</span>
          </span>
        </h2>
        <p>
          <span className="logo">JOLIE</span> has developed to incorporate four
          superb takeout areas in Toronto with additional to come sooner rather
          than later. Our group takes pride in the way that we can furnish our
          new and faithful clients with extraordinary tasting Indian-roused
          nourishment that is not normal for that at some other Indian eatery
          you visit.
        </p>
        <button>LEARN MORE</button>
      </div>
    </section>
  );
};

export default About;
