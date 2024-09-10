// eslint-disable-next-line react/prop-types
const Program = ({ urlOne, urlTwo, content }) => {
  return (
    <div className="program">
      <img src={urlOne} alt="Program" />
      <div className="content">
        <img src={urlTwo} alt="Program Image" />
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Program;
