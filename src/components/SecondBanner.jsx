function SecondBanner() {
  return (
    <div className="second-banner">
      <div className="second-banner-text">
        <div>
          <h2>
            For makers <br /> and <span>creators</span>
          </h2>
          <p>
            who value both productivity <br />
            and well-being
          </p>
        </div>
        <div>
          <a href="">Find Your Membership</a>
        </div>
      </div>

      <div className="second-banner-cards-container">
        <div className="second-banner-cards-title">
          <p>
            <span>WORK</span> - PLAY - CONNECT
          </p>
        </div>
        <div className="second-banner-card">
          <img src="/c1.png" alt="" />
          <div className="card-text">
            <h2>Multi-use spaces</h2>
            <p>
              Welcome to a new way of thriving, where work, play, and community
              come together.
            </p>
          </div>
        </div>
        <div className="second-banner-card">
          <img src="/c2.png" alt="" />
          <div className="card-text">
            <h2>Coworking</h2>
            <p>
              Private and inspiring spaces featuring 18 private offices,
              dedicated workstations, meeting and technology room, and a range
              of premium amenities to support productivity and collaboration.
            </p>
          </div>
        </div>
        <div className="second-banner-card">
          <img src="/c3.png" alt="" />
          <div className="card-text">
            <h2>Padel & Wellness</h2>
            <p>
              Two state-of-the-art padel courts, a functional gym, modern
              showers, and a thoughtfully designed nutritional bar—all crafted
              to help you maintain balance and enhance your well-being.
            </p>
          </div>
        </div>
        <div className="second-banner-card">
          <img src="/c4.png" alt="" />
          <div className="card-text">
            <h2>Community</h2>
            <p>
              Programs. Events. Motivation. Lessons. Sharing. A premium space
              where you&apos;re surrounded by peers who inspire and challenge
              you to grow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondBanner;
