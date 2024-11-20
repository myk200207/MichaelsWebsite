
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import backgroundImage from './assets/backgroundimage3.jpg'
import { NavBar, Hero, About,Skills,Experience,Projects,Contact} from './components';


function App() {

  return (
   <div className="text-white"style={{backgroundImage: `url(${backgroundImage}`, backgroundSize:'cover', backgroundPosition:'center', backgroundAttachment: 'fixed' ,imageRendering:'auto', overflowX: 'hidden'}}>
    <NavBar/>
    <Hero/>
    <About/>
    <Skills/>
    <Experience defaultColor = "bg-cyan-500"/>
    <Projects/>
    <Contact/>
   </div>
  )
}

export default App
