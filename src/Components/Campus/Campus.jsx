import Title from "../Title/Title";
import "./Campus.css";
import ImageCard from "./ImageCard";
import urlOne from "../../assets/images/gallery-1.png";
import urlTwo from "../../assets/images/gallery-2.png";
import urlThree from "../../assets/images/gallery-3.png";
import urlFour from "../../assets/images/gallery-4.png";
import rightWhiteArrow from "../../assets/images/white-arrow.png";

const Campus = () => {
  return (
    <section id="campus" className="container">
      <Title title="campus photos" subTitle="gallery" />
      <div className="campus__container">
        <ImageCard url={urlOne} />
        <ImageCard url={urlTwo} />
        <ImageCard url={urlThree} />
        <ImageCard url={urlFour} />
      </div>
      <button className="button dark-button">
        See more here <img src={rightWhiteArrow} alt="right white arrow" />
      </button>
    </section>
  );
};

export default Campus;
