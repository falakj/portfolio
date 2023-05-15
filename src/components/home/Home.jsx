import "./home.scss";
import { Typewriter } from "react-simple-typewriter";
//import Contact from './../contact/Contact';
//import { Link, animateScroll as scroll } from "react-scroll";


export default function Home() {

  return (

    <div className="home" id="home">
      
      <div className="left">
        <div className="imgContainer">
         <img src="assets/me11.png" alt=""/>
        </div>

        <div className="icons" id="icons">
          <img src="assets/LinkedIn Circled.svg" alt=""/>
          <img src="assets/GitHub.svg" alt=""/>
          <img src="assets/Behance.svg" alt=""/>
          <img src="assets/Instagram.svg" alt=""/>
          <img src="assets/Mail.svg" alt=""/>
        </div>

        
      </div>


      <div className="right">
        <div className="wrapper">
         <div className="itemContainer">
            <img src="assets/hey1.svg" alt="" className="icon"/>
            <span>Hi, I'm </span>
         </div>
  
          <p className="t1" id="t1">Front-End Developer who believes in creating</p>
          <p className="t2" id="t2">minimal, intuitive & delightful user experience interactions.</p> 

          <h1>
          <span style={{color: '#E7717D' , fontSize:'40px' , fontWeight: '500', marginBottom: '100px'}}>
            <Typewriter
              loop
              cursor
              cursorStyle="."
              typeSpeed={250}
              deleteSpeed={150}
            
              words={['Developer', 'Designer', 'Student']}
            />
          </span>
            
          </h1>

         
        
          {/* <Link to="skills" smooth={true} duration={100}>
            <button
              onClick={handleClick} 
              className="button">
            Let's Chat
              </button>
          </Link>  */}


          
          <button className="button">
            Let's Chat
          </button>
          
          
          <div className="more">
            <a href="#skills" className="mr">
            find out more
            </a>
            <img src="assets/DownArrow.svg" alt="" className="arr"></img>
          </div>

        </div>
        

      </div>


    </div>
  );
};
