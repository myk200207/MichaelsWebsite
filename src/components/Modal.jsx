import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header closeButton className="justify-content-center border-b-0 ">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="flex-fill text-center"
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className = "px-20">
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer className="justify-evenly border-t-0">
        <Button href={props.githublink} target="_blank" className ="bg-transparent  text-blue-400">
          Github
        </Button>
        <Button className ="bg-transparent  text-blue-400" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}