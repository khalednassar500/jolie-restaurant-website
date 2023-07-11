import PHONE from "../../media/icons/phone-orange.svg";

const BookATable = () => {
  return (
    <div className="h-book">
      <div className="h-book-table">
        <div className="h-book-table-l">
          <h2>open hours</h2>
          <p>
            <span>saturday-tuesday</span> 7:00am - 11:00pm (breakfast)
          </p>
          <p>
            <span>saturday-tuesday</span> 12:00pm - 11:00pm (lunch/dinner)
          </p>
          <p>
            <img src={PHONE} alt="phone icon" />
            +201234567890
          </p>
        </div>
        <div className="h-book-table-r">
          <h2>book a table</h2>
          <form>
            <input type="text" placeholder="Number Of Guest" required />
            <div className="h-book-con">
              <div>
                <input type="text" placeholder="Date" />
                <input type="text" placeholder="Time" />
              </div>
              <div>
                <input type="text" placeholder="Dinner" />
                <input type="text" placeholder="Phone" />
              </div>
            </div>
            <textarea placeholder="Message"></textarea>
            <button type="submit">send request</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookATable;
