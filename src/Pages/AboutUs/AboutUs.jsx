import { useState } from "react";
import Modal from "react-modal";

const AboutUs = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="my-20">
      <button className="btn btn-primary" onClick={() => setModalIsOpen(true)}>
        open modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2>title</h2>
        <h2>body</h2>
        <div>
          <button
            onClick={() => setModalIsOpen(false)}
            className="btn btn-error"
          >
            close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default AboutUs;
