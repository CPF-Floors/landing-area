import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "../BannerCarousel.css"

function BannerCarousel() {

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <div className="banner-carousel-container">
        <div className="banner-carousel-text">
          <h2>
            OPTIMIZED <br /> WORKSPACES <br /> FOR MAXIMUM <br />
            PRODUCTIVITY{" "}
          </h2>
        </div>
        <div className="banner-carousel__viewport" ref={emblaRef}>
          <div className="banner-carousel__container">
            <div className="banner-carousel__slide"></div>
            <div className="banner-carousel__slide"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerCarousel;
