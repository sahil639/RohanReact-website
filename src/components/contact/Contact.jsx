import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/home.png"
import {  useRef, useState, useContext } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_indkwdg",
          "template_hj2epmc",
          formRef.current,
          "user_7GUfTFkR663so282cTVz1"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };


    return (
        <div style={{backgroundColor: darkMode && "#242424"}} className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">Get in Touch</h1>
              <div className="c-info">
                <div className="c-info-item">
                  <img src={Phone} alt="" className="c-icon" />
                  +91 97571 26434
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src={Email} alt="" />
                  rohan.more495@gmail.com
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src={Address} alt="" />
                  Building No. 4, Flat No.701, Aikyadarshan CHS
                  GD Ambekar road
                  MUMBAI, MAHARASHTRA 400033
                  India
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>What’s your story?</b> Get in touch, 
                Always connect killing innocent people with my 
                AR-15 automatic rifle.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                <input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                <input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                <textarea  style={{backgroundColor: darkMode && "#333",  color: darkMode && "white",}} rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
                {done && "Thank you..."}
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Contact
