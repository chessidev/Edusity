import Title from "../Title/Title";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.webp";
import mail_icon from "../../assets/images/mail-icon.webp";
import phone_icon from "../../assets/images/phone-icon.webp";
import location_icon from "../../assets/images/location-icon.webp";
import white_arrow from "../../assets/images/white-arrow.webp";
import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c6aef18-3760-4ffb-9eff-668a80bd3d29");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contact" className="container">
      <Title title="get in touch" subTitle="contact us" />
      <div className="grid-container">
        <div className="contact-container">
          <h3>
            Send us a message <img src={msg_icon} alt="message icon" />
          </h3>
          <p>
            Feel free to reach out through contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            university community.
          </p>
          <ul>
            <li>
              <img src={mail_icon} alt="email icon" />
              eng.youssefelsayed03@gmail.com
            </li>
            <li>
              <img src={phone_icon} alt="phone icon" />
              +201114809161
            </li>
            <li>
              <img src={location_icon} alt="address icon" />
              Giza, Egypt
            </li>
          </ul>
        </div>
        <div className="form-conatiner">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">
              Your name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </label>
            <label htmlFor="phone">
              Phone number
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                required
              />
            </label>
            <label htmlFor="email">
              Your email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </label>
            <label htmlFor="text">
              Your message
              <textarea
                name="text"
                id="text"
                placeholder="Enter your message"
                required
                rows="6"
              ></textarea>
            </label>
            <button type="submit" className="button dark-button">
              Submit now <img src={white_arrow} alt="white arrow" />
            </button>
            <span>{result}</span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
