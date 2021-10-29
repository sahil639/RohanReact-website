import "./About.css";
import rohan from "../../img/rohansies.png";
import Cone from "../../img/Cone.png";
import Pill from "../../img/Pill.png";
import Sphere from "../../img/Sphere.png";

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
               {/* <div className="a-card bg"></div> */}
               <div className="a-card">
                   <img src={rohan} alt="" className="a-img"/>
               </div>
           </div>
           <div className="a-right">
              <h1 className="a-title">About Me</h1>
              <p className="a-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sapiente aut nulla at quasi ullam voluptates distinctio 
                  ea, pariatur eaque doloremque ducimus iste eum quibusdam
                   explicabo. Est vero architecto odit! Facere, quo aliquid!
                   a, reprehenderit rem.
              </p>
              <p className="a-desc">
                 "Horse sense is the thing a horse has which keeps it from betting on people."
              </p>
            <div className="a-award">
              <img src={Cone} alt="" className="a-Cone" />
              <img src={Pill} alt="" className="a-Pill" />
              <img src={Sphere} alt="" className="a-Sphere" />
            </div>
            <div className="award-cards">
            <div className="a-award-texts">
                  <h4 className="a-award-title">INERNATIONAL PANGYA</h4>
                  <p className="a-award-sub">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Alias voluptatibus aliquid commodi doloribus.
                  </p>
              </div>
              <div className="a-award-texts">
                  <h4 className="a-award-title">INERNATIONAL PANGYA</h4>
                  <p className="a-award-sub">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       
                  </p>
              </div>
              
            </div>
           </div>
        </div>
    )
}

export default About
