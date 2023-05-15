import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home"
import Skills from "./components/skills/Skills"
import Contact from "./components/contact/Contact"
import Design from "./components/design/Design"
import Develop from './components/develop/Develop';

import "bootstrap/dist/css/bootstrap.min.css"
import "./app.scss"


function App() {
  return (
    <div className="app">
      <Topbar />
      
      <div className="sections">
        <Home/>
        <Develop />
        <Design />
        <Skills/>
        <Contact/>
      </div>
      
     </div>
  );
}

export default App;
