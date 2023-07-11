import Nav from "../navigation-bar/Nav";
const Header = () => {
  return (
    <div className="about-header">
      <Nav />
      <div className="about-header-text">
        <h1>About us</h1>
        <p>home{">>"} about </p>
      </div>
    </div>
  );
};

export default Header;
