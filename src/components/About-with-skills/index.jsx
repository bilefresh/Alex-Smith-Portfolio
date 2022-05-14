import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                My mission is to capture the best moments, design and develop the best websites.
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Alex Smith. Photographer, UI/UX Designer and Web designer from USA, California, San
                Francisco. I have rich experience in web design and
                building, UI/UX design and photography, I am also good at wordpress.
              </p>
              {/* <a href="#0" className="simple-btn mt-40"> 
                Download C.V
              </a>*/}
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">Photography</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Web Development</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="60%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">UI / UX Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="88%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
