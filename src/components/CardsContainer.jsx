function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="full-card">
        <img src="/full-card-1.png" alt="" />
        <div className="full-card-text">
          <h2>COWORK</h2>
          <a href="">Explore</a>
        </div>
      </div>
      <div className="medium-card-container">
        <div className="medium-card">
          <img src="/medium-card-1.png" alt="" />
          <div className="medium-card-text">
            <h2>HEALTHNESS</h2>
            <a href="">Explore</a>
          </div>
        </div>
        <div className="medium-card">
          <img src="/medium-card-2.png" alt="" />
          <div className="medium-card-text">
            <h2>GYM CENTRE</h2>
            <a href="">Explore</a>
          </div>
        </div>
      </div>
      <div className="full-card">
        <img src="/full-card-2.png" alt="" />
        <div className="full-card-text">
          <h2>PADEL COURTS</h2>
          <a href="">Explore</a>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;
