import MAP from "../../media/images/Rectangle-38.svg";
import PHONE from "../../media/icons/Vector.svg";
import LOCATION from "../../media/icons/carbon_location-filled.svg";
import MEDIA from "../../media/icons/Group14.svg";

const Footer = () => {
  return (
    <div className="h-footer">
      <div className="h-footer-head">
        <div className="h-footer-head-back"></div>
        <h2>subscribe to our newsletter</h2>
        <p>
          Lörem ipsum ösabel vunas syvangar. Difiplanar trevugt. Ner trerere, i
          trenade för kvasilogi sabebel. Vyling grit. Teral metatism i redobel.
        </p>
        <form>
          <input type="email" placeholder="Your Email Address" />
          <label>
            <input type="checkbox" />I agree the privacy policy
          </label>
        </form>
      </div>
      <div className="h-footer-map">
        <img src={MAP} alt="footer map" />
      </div>
      <div className="h-footer-links">
        <div className="h-footer-links-l">
          <div>
            <p className="logo">JOLIE</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu tellus
            suscipit orci, interdum. Eget commodo egestas tincidunt felis a ut
          </p>
        </div>
        <div className="h-footer-links-r">
          <div className="h-footer-l-l">
            <h3>quick links</h3>
            <a href="#">about</a>
            <a href="#">gallery</a>
            <a href="#">menu</a>
            <a href="#">contact </a>
          </div>
          <div className="h-footer-l-r">
            <h3>contact us</h3>
            <a href="#">
              <img src={LOCATION} alt="location icon" />
              11 Musician Ali Ismail St,cairo,egypt{" "}
            </a>
            <a href="#">
              <img src={PHONE} alt="phone icon" /> +201128813612{" "}
            </a>
            <div>
              <img src={MEDIA} alt="social media icons" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-footer-copyright">
        <p>copyright 2023 All rights reserverd this template is made by mahy</p>
      </div>
    </div>
  );
};
export default Footer;
