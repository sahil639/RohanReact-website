import "./contact.css";
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/home.png"

const Contact = () => {
    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Get in Touch</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className="c-icon"/>
                                +91 97571 26434
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className="c-icon"/>
                                rohanmore645@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className="c-icon"/>
                                G/4, Richa Indl Estate, Off New Link Rd, Andheri (west)
                            </div>
                        </div>
                    </div>
                    <div className="c-right"></div>
                </div>
            </div>
        </div>
    )
}

export default Contact
