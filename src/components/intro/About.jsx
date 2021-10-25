import "./About.css";
import rohan from "../../img/rohansies.jpeg";

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               <div className="a-card bg"></div>
               <div className="a-card">
                   <img src={rohan} alt="" className="a-img"/>
               </div>
           </div>
           <div className="a-right"></div>
        </div>
    )
}

export default About
