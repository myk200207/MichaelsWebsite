import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function MyModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="justify-content-center">
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="flex-fill text-center"
        >
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.description}</p>
      </Modal.Body>
      <Modal.Footer className="justify-between">
        <Button href={props.githublink} target="_blank">
          Github
        </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}