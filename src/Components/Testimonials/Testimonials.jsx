import { useEffect, useRef, useState } from "react";
import Title from "../Title/Title";
import Testimonial from "./Testimonial";
import "./Testimonials.css";
import next_icon from "../../assets/images/next-icon.webp";
import back_icon from "../../assets/images/back-icon.webp";

// may be you can fetch the data from an API
import testimonialsArray from "./testimonialsArray";
const testimaonialsLength = testimonialsArray.length;

const Testimonials = () => {
  const [translateX, setTranslateX] = useState(0);
  const ul = useRef(null);
  const nextIcon = useRef(null);
  const backIcon = useRef(null);
  const nextCard = () => {
    if (translateX > -50 * (testimaonialsLength - 2))
      setTranslateX(() => translateX - 50);
  };
  const prevCard = () => {
    if (translateX < 0) setTranslateX(() => translateX + 50);
  };
  useEffect(() => {
    ul.current.style.transform = `translateX(${translateX}%)`;
    if (translateX === -50 * (testimaonialsLength - 2)) {
      nextIcon.current.classList.add("not-active");
    } else if (translateX === 0) {
      backIcon.current.classList.add("not-active");
    } else {
      nextIcon.current.classList.remove("not-active");
      backIcon.current.classList.remove("not-active");
    }
  }, [translateX]);

  return (
    <div className="hide-overflow">
      <section id="testimonials" className="container">
        <Title title="what student says" subTitle="testimaonials" />
        <div className="testimonials-container">
          <div className="ul-container">
            <ul ref={ul}>
              {testimonialsArray.map((card, index) => {
                return (
                  <li key={index}>
                    <Testimonial card={card} />
                  </li>
                );
              })}
            </ul>
          </div>
          <img
            src={next_icon}
            alt="Right Arrow"
            className="next-button"
            onClick={nextCard}
            ref={nextIcon}
          />
          <img
            src={back_icon}
            alt="Left Arrow"
            className="back-button"
            onClick={prevCard}
            ref={backIcon}
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
