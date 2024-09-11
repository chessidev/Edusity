import "./Landing.css";
import darkArrow from "../../assets/images/dark-arrow.webp";

const Landing = () => {
  return (
    <main id="landing">
      <div className="container">
        <article className="text">
          <h1>We Ensure better education for a better world</h1>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button className="button">
            Explore more <img src={darkArrow} alt="arrow" />
          </button>
        </article>
      </div>
    </main>
  );
};

export default Landing;
