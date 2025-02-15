import MAC from "/src/assets/images/home/mac-laptop.jpg";
import bgImage from "../../assets/images/home/iphone11-bg.jpg";
import series5 from "/src/assets/images/icons/watch-series5-logo.png";
import series6 from "/src/assets/images/icons/apple-card-logo.png";
import tv from "/src/assets/images/icons/apple-tv-logo.png";
import servant from "/src/assets/images/icons/servant-logo.png";
import ipad from "/src/assets/images/icons/new-ipad-logo.png";

function Section() {
  return (
    <div>
      <section className="main-highlight-wrapper">
        <div className="internal-wrapper">
          <div className="model">16-inch model</div>
          <div className="product-title">MacBook Pro</div>
          <div className="brief-description">The best for the brightest.</div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="#">Learn more</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
            </ul>
          </div>
          <div className="main-image-wrapper">
            <img src={MAC} alt="MacBook Pro" />
          </div>
        </div>
      </section>
      <section className="second-hightlight-wrapper">
        <div className="internal-wrapper">
          <div className="title-wraper">iPhone 11 Pro</div>

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade-in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div
        className="third-highlight-wrapper"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="internal-wrapper">
          <div className="title-wraper">iPhone 11</div>
          <div className="description-wrapper">
            Just the right amount of everything.
          </div>
          <div className="price-wrapper">
            From $16.62/mo. or $399 with trade-in.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="fourth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={series5} />
            </div>
          </div>
          <div className="description-wraper">
            With the new Always-On Retina display.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={series6} />
            </div>
          </div>
          <div className="description-wraper">
            Get 3% Daily Cash on purchases from Apple using Apple Card.
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="fifth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={tv} />
            </div>
          </div>

          <div className="tvshow-logo-wraper">
            <img src={servant} />
          </div>

          <div className="watch-more-wrapper">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">AirPods Pro</div>
          </div>

          <div className="description-wraper">
            Magic like you’ve never heard.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sixth-heghlight-wrapper">
        <div className="left-side-wrapper">
          <div className="model">16-inch model</div>

          <div className="product-title-small">MacBook Pro</div>

          <div className="description-wraper">The best for the brightest.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-side-wrapper">
          <div className="top-logo-wrapper">
            <div className="logo-wrapper">
              <img src={ipad} />
            </div>
          </div>

          <div className="description-wraper">
            Like a computer. Unlike any computer.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
