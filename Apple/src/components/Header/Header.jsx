import logo from "/src/assets/images/icons/logo.png";
import search from "/src/assets/images/icons/search-icon.png";
import cart from "/src/assets/images/icons/cart.png";

function Header() {
  return (
    <div className="outer-wrapper">
      <header className="header-wrapper">
        <div className="internal-wrapper">
          <div className="header-links-wrapper">
            <ul>
              <li className="logo-link">
                <a href="/">
                  <img src={logo} alt="Logo" />
                </a>
              </li>
              <li>
                <a href="/mac/">Mac</a>
              </li>
              <li>
                <a href="/iphone/">iPhone</a>
              </li>
              <li>
                <a href="/ipad/">iPad</a>
              </li>
              <li>
                <a href="/Watch/">Watch</a>
              </li>
              <li>
                <a href="/TV/">TV</a>
              </li>
              <li>
                <a href="/Music/">Music</a>
              </li>
              <li>
                <a href="/support/">Support</a>
              </li>
              <li className="search-link">
                <a href="/search/">
                  <img src={search} alt="Search Icon" />
                </a>
              </li>
              <li className="cart-link">
                <a href="/cart/">
                  <img src={cart} alt="Cart Icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
