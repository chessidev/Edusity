// eslint-disable-next-line react/prop-types
const ImageCard = ({ url }) => {
  return (
    <div className="campus__image">
      <img src={url} alt="Campus Image" />
    </div>
  );
};

export default ImageCard;
