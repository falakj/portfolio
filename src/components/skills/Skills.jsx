import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="dev" id="dev">
        <p> SKILLS </p>
          <span class="line"></span>
        </div>

    <div className="line1">
          <img src="assets/Html.svg" alt=""/>
          <span>HTML</span>
          <img src="assets/CSS3.svg" alt=""/>
          <span>CSS</span>
          <img src="assets/JavaScript.svg" alt=""/>
          <span>JavaScript</span>
      </div>

      <div className="line1">
          <img src="assets/React.svg" alt=""/>
          <span>React</span>
          <img src="assets/Git.svg" alt=""/>
          <span className="gb">Git/Bash</span>
          <img src="assets/Bootstrap.svg" alt=""/>
          <span>Bootstrap</span>
          
      </div>

      <span class="line2"></span>

      <div className="line1">
          <img src="assets/Figma.svg" alt=""/>
          <span>Figma</span>
          <img src="assets/AdobeXD.svg" alt=""/>
          <span className="gb1">AdobeXD</span>
          <img src="assets/Details.svg" alt=""/>
          <span>UX Research</span>
        </div>

      <div className="line1">
          <img src="assets/UIDesign.svg" alt=""/>
          <span>UI Design</span>

        </div>

  </div>
  );
}
