import BACKGROUND from "../../media/images/testimonials.svg";
import PERSON1 from "../../media/images/person1.svg";
import PERSON2 from "../../media/images/person2.svg";
import PERSON3 from "../../media/images/person3.svg";
import STAR from "../../media/icons/star.svg";
import STAR_MASK from "../../media/icons/start-mask.svg";
import ARROW from "../../media/icons/arrow.svg";

const Testimonials = () => {
  return (
    <div className="h-testimonials">
      <img
        className="h-testimonials-back"
        src={BACKGROUND}
        alt="man inside restaurant"
      />
      <div className="h-testimonails-con">
        <h2 className="title">
          <span className="title-m">
            what our customers
            <br /> sayes
          </span>
          <span className="title-t1">
            <span className="title-t3 ">testimonials</span>
          </span>
        </h2>
        <section className="h-testimonails-cards">
          <div className="h-testimonails-left-arrow">
            <img src={ARROW} alt="arrow" />
          </div>

          <div className="h-testimonails-list">
            <div className="h-testimonails-item">
              <div className="h-testimonails-item-con">
                <img
                  className="h-testimonails-person"
                  src={PERSON1}
                  alt="person"
                />
                <p className="h-testimonails-item-title">Jane Cooper</p>
                <p className="h-testimonails-disc">
                  I am so happy I discovered you guys! Loved the kale chips,
                  just bought tempura veggies and onion rings. Mmm.
                </p>
                <div className="h-testimonails-stars">
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR_MASK} alt="star" />
                </div>
              </div>
            </div>
            <div className="h-testimonails-item">
              <div className="h-testimonails-item-con">
                <img
                  className="h-testimonails-person"
                  src={PERSON2}
                  alt="person"
                />
                <p className="h-testimonails-item-title">Jane Cooper</p>
                <p className="h-testimonails-disc">
                  I am so happy I discovered you guys! Loved the kale chips,
                  just bought tempura veggies and onion rings. Mmm.
                </p>
                <div className="h-testimonails-stars">
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR_MASK} alt="star" />
                </div>
              </div>
            </div>
            <div className="h-testimonails-item">
              <div className="h-testimonails-item-con">
                <img
                  className="h-testimonails-person"
                  src={PERSON3}
                  alt="person"
                />
                <p className="h-testimonails-item-title">Jane Cooper</p>
                <p className="h-testimonails-disc">
                  I am so happy I discovered you guys! Loved the kale chips,
                  just bought tempura veggies and onion rings. Mmm.
                </p>
                <div className="h-testimonails-stars">
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR} alt="star" />
                  <img src={STAR_MASK} alt="star" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-testimonails-right-arrow">
            <img src={ARROW} alt="arrow" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
