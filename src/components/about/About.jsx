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
                 "Let every fart count as a peal of thunder for liberty. Let every fart remind the nation of how much it has let pass out of its control. It is a small gesture, but one that can be very effective - especially in a large crowd. So fart, and if you must, fart often. But always fart without apology. Fart for freedom, fart for liberty - and fart proudly."
              </p>
            <div className="a-award">
              <img src={Cone} alt="" className="a-Cone" />
              <img src={Pill} alt="" className="a-Pill" />
              <img src={Sphere} alt="" className="a-Sphere" />
              <div className="a-award-texts">
                  <h4 className="a-award-title">INERNATIONAL PANGYA</h4>
                  <p className="a-award-sub">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       Alias voluptatibus aliquid commodi doloribus exercitationem, 
                       vitae a quidem harum eum omnis assumenda ea magni? Molestias?
                  </p>
              </div>
            </div>
           </div>
        </div>
    )
}

export default About
