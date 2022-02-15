import Phone from "../img/phone.png"
import Email from "../img/email.png"
import Address from "../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    setIsProcessing(true)
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0u61s8c",
        "template_r3vvc26",
        formRef.current,
        "user_mwIV02MBZKwVnHzTbklGO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsProcessing(false)
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +88 01624 58 33 22
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              hasanuzzaman201601@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Sadar, Sylhet, Bangladesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Name" name="user_name" />
            <input style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Subject" name="user_subject" />
            <input required style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} type="text" placeholder="Email" name="user_email" />
            <textarea required style={{ backgroundColor: darkMode && "#333", color: darkMode && "white" }} rows="5" placeholder="Message" name="message" />
            <button >{isProcessing ? "Sending" : done ? "Send Another" : "Submit"}</button>
            <p style={{ display: "flex", alignItems: "flex-end" }}>{done && "Thank you... I will reply you soon"}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
