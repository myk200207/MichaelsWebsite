import React , {useState} from 'react'
import UvaUTS from '../assets/UvaUTS.png';
import MyModal from './Modal.jsx'; 

const Projects = () => {
  const [modalShow,setModalShow] = useState(false);
  const handleShow = (Title: String) => { 
      setModalShow(true);
      <MyModal show={modalShow} onHide={()=> {handleClose}} Title={Title}/>
  }
  const handleClose = () => {setModalShow(false)}
  return (
    <section>
      <div className="container text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl">Projects</h1>
          <br />
          <p>My journey</p>
        </div>
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center">
         <a onClick={ () => handleShow(Title:{"UVA Uts"})} href="#portfolio1" ><img src={UvaUTS}/></a>
          <div>content 2</div>
          <div>content 3</div>
          <div>content 4</div>
          <div>content 5</div>
          <div>content 6</div>
        </div>
      </div>

    </section>
  );
}

export default Projects
