import "./PlannedTripItinerary.css";
import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import SingleDaySchedule from "../models/SingleDaySchedule";
import SingleDayItinerary from "./SingleDayItinerary";
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
      <button className="open-modal-button" onClick={openModal}>
        View Itinerary
      </button>
      <Modal
        className="modal"
        overlayClassName="overlay-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        {itinerary.map((item, index) => (
          <SingleDayItinerary schedule={item} index={index} key={index} />
        ))}
        <i className="fa-solid fa-xmark" onClick={closeModal}></i>
      </Modal>
    </div>
  );
};

export default PlannedTripItinerary;
