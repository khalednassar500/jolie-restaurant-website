import BREAKFAST from "../../media/images/breakfast.svg";
import LUNCH from "../../media/images/lunch.svg";
import DINNER from "../../media/images/dinner.svg";

const Menu = () => {
  return (
    <div className="h-menu">
      <div className="h-menu-text">
        <h2 className="title">
          <span className="title-m">DELICIOUS FOOD MENU</span>
          <span className="title-t1">
            <span className="title-t3 ">MENU</span>
          </span>
        </h2>
        <p>
          Making a reservation at Délicious restaurant is easy and takes just a
          couple of minutes.
        </p>
      </div>
      <div className="h-menu-img">
        <img src={BREAKFAST} alt="breakfast" />
        <img src={LUNCH} alt="lunch" />
        <img src={DINNER} alt="dinner" />
      </div>
    </div>
  );
};

export default Menu;
