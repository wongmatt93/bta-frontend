import "./PlannedTripItinerary.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import SingleDaySchedule from "../models/SingleDaySchedule";
Modal.setAppElement("#root");

interface Props {
  itinerary: SingleDaySchedule[];
}

const PlannedTripItinerary = ({ itinerary }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="PlannedTripItinerary">
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        {itinerary.map((item, index) => (
          <p key={index}>{item.breakfast}</p>
        ))}
      </Modal>
    </div>
  );
};

export default PlannedTripItinerary;
