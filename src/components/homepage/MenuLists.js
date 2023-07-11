import ARROW from "../../media/icons/arrow-circle.svg";

const menuData = [
  {
    id: 1,
    image: "http://localhost:3000/../../media/images/breakfast1.svg",
  },
];

const MenuList = () => {
  const imagePath = require("../../media/images/breakfast1.svg").default;
  return (
    <div class="h-menu-list">
      <h2 className="title">
        <span className="title-m">breakfast Menu</span>
        <span className="title-t1">
          <span className="title-t3 ">delicious</span>
        </span>
      </h2>
      <section className="h-menu-items">
        <div className="h-m-item">
          <div className="h-m-i-text">
            <h3>Crispy Tofu with Stuffed</h3>
            <p>Vegan Snack</p>
            <a href="#">order now</a>
            <div className="h-m-i-img">
              <img src={imagePath} alt="" />
            </div>
          </div>
        </div>
        <div className="h-m-item">
          <div className="h-m-i-text">
            <h3>Crispy Tofu with Stuffed</h3>
            <p>Vegan Snack</p>
            <a href="#">order now</a>
            <div className="h-m-i-img">
              <img src={imagePath} alt="" />
            </div>
          </div>
        </div>
        <div className="h-m-item">
          <div className="h-m-i-text">
            <h3>Crispy Tofu with Stuffed</h3>
            <p>Vegan Snack</p>
            <a href="#">order now</a>
            <div className="h-m-i-img">
              <img src={imagePath} alt="" />
            </div>
          </div>
        </div>
        <div className="h-m-item">
          <div className="h-m-i-text">
            <h3>Crispy Tofu with Stuffed</h3>
            <p>Vegan Snack</p>
            <a href="#">order now</a>
            <div className="h-m-i-img">
              <img src={imagePath} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="h-m-item">
          <div className="h-m-i-text"></div>
          <div className="h-m-i-img"></div>
        </div>
        <div className="h-m-item">
          <div className="h-m-i-text"></div>
          <div className="h-m-i-img"></div>
        </div>
        <div className="h-m-item">
          <div className="h-m-i-text"></div>
          <div className="h-m-i-img"></div>
        </div> */}
      </section>
      <section className="h-menu-arrows">
        <div className="h-m-a-left">
          <img src={ARROW} alt="arrow icon" />
        </div>
        <div className="h-m-a-right arr-non-active">
          <img src={ARROW} alt="arrow icon" />
        </div>
      </section>
    </div>
  );
};

export default MenuList;
