import Title from "../Title/Title";
import "./Campus.css";
import ImageCard from "./ImageCard";
import urlOne from "../../assets/images/gallery-1.webp";
import urlTwo from "../../assets/images/gallery-2.webp";
import urlThree from "../../assets/images/gallery-3.webp";
import urlFour from "../../assets/images/gallery-4.webp";
import rightWhiteArrow from "../../assets/images/white-arrow.webp";

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
