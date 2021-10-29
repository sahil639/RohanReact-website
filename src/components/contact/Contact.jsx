import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/home.png"
// import { useRef } from "react";

const Contact = () => {
    // const formRef = useRef()
    return (
        <div className="c">
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
                  rohanmore645@gmail.com
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src={Address} alt="" />
                  G/4, Richa Indl Estate, Off New Link Rd, Andheri (west)
                </div>
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>What’s your story?</b> Get in touch, 
                Always connect killing innocent people with my 
                AR-15 automatic rifle.
              </p>
              <form >
                <input  type="text" placeholder="Name" name="user_name" />
                <input  type="text" placeholder="Subject" name="user_subject" />
                <input  type="text" placeholder="Email" name="user_email" />
                <textarea  rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    };

export default Contact
