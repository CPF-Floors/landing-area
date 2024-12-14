function Memberships() {
  return (
    <>
      <div id="memberships" className="memberships-container">
        <h2>MEMBERSHIPS</h2>
        <p>
          Choosing AREA CENTRE means maximizing your investment- not just in
          your career, but in your time, well-being, <br /> and community.
          Imagine having access to a workspace that fuels your productivity
          while also offering spaces to <br /> unwind, recharge, and connect
          with fellow makers and creators.
        </p>
        <a className="membership-link" href="#contact">
          Find Your Membership
        </a>
        <div className="memberships-cards-container">
          <div className="membership-card">
            <div className="membership-card-title">
              <h2>PRIVATE OFFICE</h2>
              <h4>Starting at $799</h4>
            </div>
            <p>
              Enjoy a fully equipped Private Office, perfect for individuals/
              team looking to have their own space.
            </p>
            <a href="#contact">EXPLORE</a>
          </div>
          <div className="membership-card">
            <div className="membership-card-title">
              <h2>DEDICATED DESK</h2>
              <h4>Starting at $499</h4>
            </div>
            <p>
              A dedicated desk in a shared space gives you a personal
              workstation with the chance to connect with a vibrant community of
              professionals.
            </p>
            <p>
              Note: For teams of two request for the dual-desk configuration
            </p>
            <a href="#contact">EXPLORE</a>
          </div>
          <div className="membership-card">
            <div className="membership-card-title">
              <h2>STATION</h2>
              <h4>Starting at $399</h4>
            </div>
            <p>
              With the station membership, choose a different spot each day in
              our private coworking areas, perfect for freelancers or those
              seeking a dynamic workspace.
            </p>
            <a href="#contact">EXPLORE</a>
          </div>
          <div className="membership-card">
            <div className="membership-card-title">
              <h2>LOUNGE</h2>
              <h4>Starting at $299</h4>
            </div>
            <p>
              Access our cozy lounge area for casual work and networking. A
              flexible option for those needing a professional space without a
              fixed desk.
            </p>
            <a href="#contact">EXPLORE</a>
          </div>
        </div>
      </div>
      <div id="about" className="includes-container">
        <h2>MEMBERSHIP INCLUDES</h2>
        <div className="includes">
          <div>
            <img src="/m1.svg" alt="" />
            <p>Padel Courts</p>
          </div>
          <div>
            <img src="/m2.svg" alt="" />
            <p>Phone Both</p>
          </div>
          <div>
            <img src="/m3.svg" alt="" />
            <p>Rest Room</p>
          </div>
          <div>
            <img src="/m4.svg" alt="" />
            <p>Showers</p>
          </div>
        </div>
        <div className="includes-2">
          <div>
            <img src="/m5.svg" alt="" />
            <p>Bathrooms</p>
          </div>
          <div>
            <img src="/m6.svg" alt="" />
            <p>Coffee</p>
          </div>
          <div>
            <img src="/m7.svg" alt="" />
            <p>Community</p>
          </div>
          <div>
            <img src="/m8.svg" alt="" />
            <p>Meeting Rooms</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memberships;
