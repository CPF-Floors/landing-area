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
            <div>
              <div className="membership-card-title">
                <h2>PRIVATE OFFICE</h2>
                <h4>Starting at $799</h4>
              </div>
              <p>
                Enjoy a fully equipped Private Office, perfect for individuals/
                team looking to have their own space.
              </p>
            </div>
            <a href="#contact">EXPLORE</a>
          </div>
          <div className="membership-card">
            <div>
              <div className="membership-card-title">
                <h2>DEDICATED DESK</h2>
                <h4>Starting at $499</h4>
              </div>
              <p>
                A dedicated desk in a shared space gives you a personal
                workstation with the chance to connect with a vibrant community
                of professionals.
              </p>
              <span className="text-sart">
                Note: For teams of two request for the dual-desk configuration
              </span>
            </div>

            <a href="#contact">EXPLORE</a>
          </div>
          <div className="membership-card">
            <div>
              <div className="membership-card-title">
                <h2>FLEX SEAT</h2>
                <h4>Starting at $399</h4>
              </div>
              <p>
                With the Flex Seat membership, enjoy the freedom to choose a new
                spot each day at our intimate work table, offering a
                semi-private atmosphere ideal for freelancers or professionals
                seeking a dynamic and flexible workspace.
              </p>
            </div>
            <a href="#contact">EXPLORE</a>
          </div>
          <div className="membership-card">
            <div>
              <div className="membership-card-title">
                <h2>LOUNGE</h2>
                <h4>Starting at $299</h4>
              </div>
              <p>
                Access our cozy lounge area for casual work and networking. A
                flexible option for those needing a professional space without a
                fixed desk.
              </p>
            </div>
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
            <img src="/m4.svg" alt="" />
            <p>Showers</p>
          </div>
          <div>
            <img src="/m8.svg" alt="" />
            <p>Meeting Rooms</p>
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
            <img src="/m2.svg" alt="" />
            <p>Phone Both</p>
          </div>
          <div>
            <img src="/m3.svg" alt="" />
            <p>Rest Room</p>
          </div>
        </div>
      </div>

      <div id="about" className="includes-container-mobile">
        <h2>MEMBERSHIP INCLUDES</h2>
        <div className="includes-mobile">
          <div className="includes-card-mobile">
            <img src="/m1.svg" alt="" />
            <p>Padel Courts</p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m4.svg" alt="" />
            <p>Showers</p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m2.svg" alt="" />
            <p>Phone Both</p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m5.svg" alt="" />
            <p>Bathrooms</p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m6.svg" alt="" />
            <p>Coffee</p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m7.svg" alt="" />
            <p>Community</p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m8.svg" alt="" />
            <p>
              Meeting <br /> Rooms
            </p>
          </div>
          <div className="includes-card-mobile">
            <img src="/m3.svg" alt="" />
            <p>Rest Room</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Memberships;
