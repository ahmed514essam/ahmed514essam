import "./CursorImages.css";

type Props = {
  images?: { id: number; url: string }[];
};

const CursorImages = ({ images = [] }: Props) => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="imagecont carousel slide"
      >
        {/* 🔥 Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              title={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* 🔥 Images */}
        <div className="carousel-inner">
          {images.length > 0 ? (
            images.map((img, index) => (
              <div
                key={img.id}
                className={`carousel-item imgy ${
                  index === 0 ? "active" : ""
                }`}
              >
                <img
                  src={img.url}
                  className="d-block w-100"
                  alt="about"
                />
              </div>
            ))
          ) : (
            <div className="carousel-item active imgy">
              <img
                src="https://via.placeholder.com/400x300"
                className="d-block w-100"
                alt="no data"
              />
            </div>
          )}
        </div>

        {/* 🔥 Controls */}
        <button
          className="carousel-control-prev changePicture"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
          title="Previous slide"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next changePicture"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
          title="Next slide"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default CursorImages;