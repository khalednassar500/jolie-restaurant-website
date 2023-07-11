import { useState } from "react";
import DISH1 from "../../media/images/dish1.svg";
import DISH2 from "../../media/images/dish2.svg";
import DISH3 from "../../media/images/dish3.svg";
const order = [DISH1, DISH2, DISH3];

const Special = () => {
  const [imgOrders, setImgOrders] = useState([0, 1, 2]);

  const handleClick = (i) => {
    setImgOrders([...i]);
  };

  return (
    <div className="h-special">
      <div className="h-special-text">
        <h2 className="title">
          <span className="title-m">MOST POPULAR DISHES</span>
          <span className="title-t1">
            <span className="title-t3 ">SPECIAL</span>
          </span>
        </h2>
        <p>
          Making a reservation at Délicious restaurant is easy and takes just a
          couple of minutes.
        </p>
      </div>
      <div className="h-special-img">
        <div className="h-s-i">
          <img
            className="h-small-dish"
            src={order[imgOrders[0]]}
            alt="dish contains food"
          />
          <img
            className="h-big-dish"
            src={order[imgOrders[1]]}
            alt="dish contains food"
          />
          <img
            className="h-small-dish"
            src={order[imgOrders[2]]}
            alt="dish contains food"
          />
        </div>
        <div className="h-s-t">
          <p
            className={imgOrders[0] === 0 && "h-s-active"}
            onClick={() => handleClick([0, 1, 2])}
          >
            <span></span>
          </p>
          <p
            className={imgOrders[0] === 1 && "h-s-active"}
            onClick={() => handleClick([1, 2, 0])}
          >
            <span></span>
          </p>
          <p
            className={imgOrders[0] === 2 && "h-s-active"}
            onClick={() => handleClick([2, 0, 1])}
          >
            <span></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Special;
