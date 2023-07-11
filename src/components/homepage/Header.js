import Nav from "../navigation-bar/Nav";
import INSTA from "../../media/icons/insta.svg";
import TWITTER from "../../media/icons/twitter.svg";
import FACEBOOK from "../../media/icons/facebook.svg";

const Header = () => {
  return (
    <header className="h-header">
      <Nav />
      <div className="h-header-text">
        <p>Ready to</p>
        <h1>
          ENJOY A TASTE OF <span>HEAVEN</span>
        </h1>
        <p>come to relax and enjoy delicious food and drinks</p>
        <div>
          <button>FIND A TABLE</button>
          <button>VIEW MENUS</button>
        </div>
      </div>
      <div className="h-header-media">
        <img src={FACEBOOK} alt="facebook icon" />
        <img src={INSTA} alt="instagram icon" />
        <img src={TWITTER} alt="twitter icon" />
      </div>
    </header>
  );
};

export default Header;
