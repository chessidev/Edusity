const Testimonial = ({ card }) => {
  return (
    <div className="testimonial">
      <div className="user-info">
        <img src={card.userProfilePicture} alt="User Profile Picture" />
        <div>
          <h3>{card.userName}</h3>
          <span>{card.college}</span>
        </div>
      </div>
      <p>{card.comment}</p>
    </div>
  );
};

export default Testimonial;
