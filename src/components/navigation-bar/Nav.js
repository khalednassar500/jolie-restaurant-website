const Nav = ({ activeLink }) => {
  return (
    <>
      <nav className="nav-bottom">
        <div>
          <p className="logo">JOLIE</p>
        </div>
        <div className="nav-links">
          <a href="#" className={activeLink === "home" ? "activeLink" : ""}>
            Home
          </a>
          <a href="#" className={activeLink === "about-us" ? "activeLink" : ""}>
            About us{" "}
          </a>
          <a
            href="#"
            className={activeLink === "contact-us" ? "activeLink" : ""}
          >
            Contact us
          </a>
          <a href="#" className={activeLink === "gallery" ? "activeLink" : ""}>
            Gallery
          </a>
          <a href="#" className={activeLink === "menu" ? "activeLink" : ""}>
            Menu
          </a>
        </div>
        <button>FIND A TABLE</button>
      </nav>
    </>
  );
};

export default Nav;
