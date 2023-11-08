import Banner1 from "./Banner1";
import Banner2 from "./Banner2";


const HomeBanner = () => {
  return (
    <div className="">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <Banner1></Banner1>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <Banner2></Banner2>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomeBanner;