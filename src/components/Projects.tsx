import React , {useState} from 'react'
import UvaUTS from '../assets/UvaUTS.png';
import MyModal from './Modal.jsx'; 

const Projects = () => {
  const [modalShow,setModalShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [githubLink , setGithubLink] = useState("");
  const handleShow = (title, description,githubLink) => { 
      setModalShow(true);
      setTitle(title);
      setDescription(description);
      setGithubLink(githubLink);
  }
  const handleClose = () => {setModalShow(false)}
 
  return (
    <section className="h-auto min-h-screen">
      <div className="container text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl">Projects</h1>
          <br />
          <p>My journey</p>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[auto_auto_auto] justify-center items-center" >
         <a className=""onClick={ () => handleShow("UVA UTS Bus Route", "I was able to develop an command-line user interface that allowed users to search for buses to reach certain stops."
         +" From UVA's transit website, I was able to download a JSON file of the UVA buses, stops, and routes and implement my logic to develop this app.", "https://github.com/myk200207/UVA-busline")}  ><img  className="w-60 h-60 object-cover"   src={UvaUTS}/></a>
         <a onClick={ () => handleShow("Gameplay", "test", "")} href="#portfolio1" ><img  className="w-60 h-60 object-cover"  src={UvaUTS}/></a>
         <a className=""onClick={ () => handleShow("UVA UTS Bus Route", "I was able to develop an command-line user interface that allowed users to search for buses to reach certain stops."
         +" From UVA's transit website, I was able to download a JSON file of the UVA buses, stops, and routes and implement my logic to develop this app.", "https://github.com/myk200207/UVA-busline")}  ><img  className="w-60 h-60 object-cover" src={UvaUTS}/></a>
         <a className=""onClick={ () => handleShow("UVA UTS Bus Route", "I was able to develop an command-line user interface that allowed users to search for buses to reach certain stops."
         +" From UVA's transit website, I was able to download a JSON file of the UVA buses, stops, and routes and implement my logic to develop this app.", "https://github.com/myk200207/UVA-busline")}  ><img  className="w-60 h-60 object-cover"   src={UvaUTS}/></a>
          <a className=""onClick={ () => handleShow("UVA UTS Bus Route", "I was able to develop an command-line user interface that allowed users to search for buses to reach certain stops."
         +" From UVA's transit website, I was able to download a JSON file of the UVA buses, stops, and routes and implement my logic to develop this app.", "https://github.com/myk200207/UVA-busline")}  ><img  className="w-60 h-60 object-cover"  src={UvaUTS}/></a>
          <a className=""onClick={ () => handleShow("UVA UTS Bus Route", "I was able to develop an command-line user interface that allowed users to search for buses to reach certain stops."
         +" From UVA's transit website, I was able to download a JSON file of the UVA buses, stops, and routes and implement my logic to develop this app.", "https://github.com/myk200207/UVA-busline")}  ><img   className="w-60 h-60 object-cover"  src={UvaUTS}/></a>

          
        </div>
      </div>
      <MyModal show={modalShow} onHide={handleClose} title={title} description = {description} githublink = {githubLink} />
    </section>

  );
}

export default Projects
