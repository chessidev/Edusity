import Program from "./Program";
import "./Programs.css";
import programOneUrlOne from "../../assets/images/program-1.png";
import programOneUrlTwo from "../../assets/images/program-icon-1.png";
import programTwoUrlOne from "../../assets/images/program-2.png";
import programTwoUrlTwo from "../../assets/images/program-icon-2.png";
import programThreeUrlOne from "../../assets/images/program-3.png";
import programThreeUrlTwo from "../../assets/images/program-icon-3.png";
import Title from "../Title/Title";

const Programs = () => {
  return (
    <section id="programs" className="container">
      <Title title="what we offer" subTitle="our programs" />
      <div className="programs__container">
        <Program
          urlOne={programOneUrlOne}
          urlTwo={programOneUrlTwo}
          content="Graduation Degree"
        />
        <Program
          urlOne={programTwoUrlOne}
          urlTwo={programTwoUrlTwo}
          content="Masters Degree"
        />
        <Program
          urlOne={programThreeUrlOne}
          urlTwo={programThreeUrlTwo}
          content="Post Graduation"
        />
      </div>
    </section>
  );
};

export default Programs;
