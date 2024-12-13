import Header from "./Header";

function MainBanner() {
  return (
    <div className="main-banner">
      <Header />
      <div className="main-banner-text">
      <div className="main-banner-img">
          <img src="/expanded-logo.svg" alt="" />
        </div>
        <div>
          <h1>
            Seamlessly <span>blend work,</span>
            <br /> play, and well-being
          </h1>
          <h2>
            AREA is where your professional drive meets a <br /> space that
            supports your lifestyle goals
          </h2>
          <a className="link" href="#contact">
            Become a Founding Member
          </a>
        </div>
      </div>

      <img className="big-logo" src="/transparent-logo.svg" alt="" />
    </div>
  );
}

export default MainBanner;
