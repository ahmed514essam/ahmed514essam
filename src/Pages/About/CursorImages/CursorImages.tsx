import "./CursorImages.css" ;
import OneI from "../../../../public/aboutImages/one.jpeg" ;
import TwoI from "../../../../public/aboutImages/two.jpg" ;
import ThreeI from "../../../../public/aboutImages/three.jpg" ;
import FourI from "../../../../public/aboutImages/four.jpg" ;
import FiveI from "../../../../public/aboutImages/five.jpg" ;
import SexI from "../../../../public/aboutImages/sex.jpg" ;

const CursorImages = () => {

    return (
        <>
        <div id="carouselExampleIndicators" className="imagecont carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>


  </div>
  <div className="carousel-inner">
    <div className="carousel-item active imgy">
      <img src={OneI} className="d-block w-100" alt="My firs image "/>
    </div>
    <div className="carousel-item imgy">
      <img src={TwoI} className="d-block w-100" alt="My second image"/>
    </div>
    <div className="carousel-item imgy">
      <img src={ThreeI} className="d-block w-100" alt="My third image"/>
    </div>
    <div className="carousel-item imgy">
      <img src={FourI} className="d-block w-100" alt="My fourth images"/>
    </div>
    <div className="carousel-item imgy">
      <img src={FiveI} className="d-block w-100" alt="My Five images"/>
    </div>
    <div className="carousel-item imgy">
      <img src={SexI} className="d-block w-100" alt="My Sex images"/>
    </div>
    
  </div>
  <button className="carousel-control-prev changePicture " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next changePicture" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</>
    );
};
export default CursorImages ;