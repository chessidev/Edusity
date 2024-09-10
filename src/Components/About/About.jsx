import "./About.css";
import about_image from "../../assets/images/about.png";
import play_icon from "../../assets/images/play-icon.png";

const About = ({ setVideo }) => {
  return (
    <section id="about" className="container">
      <div className="image-container">
        <img src={about_image} alt="College Video" />
        <img
          src={play_icon}
          alt="College Video"
          onClick={() => setVideo(true)}
        />
      </div>
      <div className="text-container">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>{`Nurturing Tomorrow's Leaders Today`}</h2>
        <p>
          {`Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.`}
        </p>
        <p>
          {`With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.`}
        </p>
        <p>
          {`Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.`}
        </p>
      </div>
    </section>
  );
};

export default About;
