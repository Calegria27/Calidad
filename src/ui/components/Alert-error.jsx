import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Alerta(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered="true"
    >
      <Modal.Header closeButton>
        <Modal.Title centered="true" id="contained-modal-title-vcenter">
            <h1>Error</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
            Existe un problema o la partida ya fue aprobada.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default Alerta;