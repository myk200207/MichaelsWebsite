import React , {useState} from 'react'
import UvaUTS from '../assets/UvaUTS.png';
import MyModal from './Modal.jsx'; 
import congress from '../assets/congress.jpg';
import wordle from '../assets/wordle.png'
import catalog from '../assets/catalog.png'
import website from '../assets/website.png'

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
    <section className="h-auto min-h-screen p-20 mt-40" id="ProjectPage">
      <div className="container text-center flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl">Projects</h1>
          <br />
          <p>A few of my projects</p>
        </div>

        <div className="grid grid-cols-[auto] sm:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] justify-center items-center gap-1 relative">
          <div
            className="cursor-pointer rounded-md h-60 w-60 bg-cover bg-center hover:scale-110 hover:z-10 trasition-transform duration-300 ease-in-out "
            style={{
              backgroundImage: `url(${website})`,
            }}
            onClick={() =>
              handleShow(
                "Personal Website",
                "This is my third personal website that I created. I used vanilla javascript, css, html, and bootstrap for the first two, and I used react, shadcn, bootstrap, and tailwind for this third one.",
                "https://github.com/myk200207/personalwebsite"
              )
            }
          ></div>

          <a
            className="cursor-pointer rounded-md h-60 w-60 bg-cover bg-center hover:scale-110 hover:z-10 trasition-transform duration-300 ease-in-out "
            onClick={() =>
              handleShow(
                "UVA UTS Bus Route",
                "I was able to develop a command-line user interface that allowed users to search for buses to get to certain stops." +
                  " From the UVA's transit website, I was able to download a JSON file that contained the UVA buses, stops, and routes, and implement my logic to develop this app.",
                "https://github.com/myk200207/UVA-busline"
              )
            }
          >
            <img className=" rounded-md w-60 h-60 object-cover" src={UvaUTS} />
          </a>
          <a
            className="cursor-pointer rounded-md h-60 w-60 bg-cover bg-center hover:scale-110 hover:z-10 trasition-transform duration-300 ease-in-out "
            onClick={() =>
              handleShow(
                "US Government Apportionment",
                "For a class project, I developed a command-line user interface that enabled users to compare and see the number of seats each states would receive under the previously used congressional apportionment methods that were proposed by Jefferson, Hamilton, and Adams." +
                  " This comparison showed how each methods would increase or decrease the number of state's representatives and thus showed how it would impact the states' and the bipartisans's influence and power",
                "https://github.com/myk200207/Apportionment"
              )
            }
            href="#portfolio1"
          >
            <img
              className="rounded-md  w-60 h-60 object-cover"
              src={congress}
            />
          </a>
          <a
            className="cursor-pointer rounded-md h-60 w-60 bg-cover bg-center hover:scale-110 hover:z-10 trasition-transform duration-300 ease-in-out "
            onClick={() =>
              handleShow(
                "Wordle Game",
                "I was able to make a replica of the game wordle using Java, JavaFx, Scenebuilder and Gradle. From building this project, I learn to better organize and componentize my codes.",
                "https://github.com/myk200207/WordleReplica"
              )
            }
          >
            <img className=" rounded-md w-60 h-60 object-cover" src={wordle} />
          </a>
          <a
            className="cursor-pointer rounded-md h-60 w-60 bg-cover bg-center hover:scale-110 hover:z-10 trasition-transform duration-300 ease-in-out "
            onClick={() =>
              handleShow(
                "Uva Catalog",
                "I was able to create a Uva Catalog for students to search for classes. I used UML diagram to set up blueprints for the projects and learned bi-directional relationships between each components. " +
                  " This app was build with Java and gradle",
                "https://github.com/myk200207/UvaCatalog"
              )
            }
          >
            <img className="rounded-md  w-60 h-60 object-cover" src={catalog} />
          </a>
        </div>
      </div>
      <MyModal
        show={modalShow}
        onHide={handleClose}
        title={title}
        description={description}
        githublink={githubLink}
      />
    </section>
  );
}

export default Projects
