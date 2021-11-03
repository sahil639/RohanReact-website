import "./intro.css";
import Me from "../../img/rohan.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Intro = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div style={{backgroundColor: darkMode && "#242424"}} className="i">
            <div className="i-left">
              <div className="i-left-wrapper">
                  <h2 className="i-intro">Hello, My name is</h2>
                  <h1 className="i-name">Rohan More</h1> 
                  <div className="i-title">
                      <div className="i-title-wrapper">
                         <div style={{color: darkMode && "#5eff00"}} className="i-title-item">Web Developer</div>
                         <div style={{color: darkMode && "#5eff00"}} className="i-title-item">Python Programmer</div> 
                         <div style={{color: darkMode && "#5eff00"}} className="i-title-item">Gamer</div> 
                         <div style={{color: darkMode && "#5eff00"}} className="i-title-item">Problem Solver</div> 
                         <div style={{color: darkMode && "#5eff00"}} className="i-title-item">Public Speaker</div> 
                         <div style={{color: darkMode && "#5eff00"}} className="i-title-item">Machine Learning Engineer</div> 
                      </div>
                  </div>
                  <div className="i-desc">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt, nesciunt! Rerum, dolorem inventore! Deserunt in qui reiciendis hic sapiente, ut optio excepturi. Culpa, nemo?
                      lit. Deserunt, nesciunt! Rerum, dolorem inventore! Deserunt in qui reiciendis hic sapiente.
                  </div>
                 <div className="i-button">
                 <button class="button">Know more</button>
                 </div>
              </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="rohan" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
