import "./PlannedTripItinerary.css";
import { useState } from "react";
import Modal from "react-modal";
import SingleDaySchedule from "../models/SingleDaySchedule";
import SingleDayItinerary from "./SingleDayItinerary";
import "animate.css";

Modal.setAppElement("#root");

interface Props {
  itinerary: SingleDaySchedule[];
  hotel: string | null;
}

const PlannedTripItinerary = ({ itinerary, hotel }: Props) => {
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
        {hotel && <h3>HOTEL - {hotel}</h3>}
        {itinerary.map((item, index) => (
          <SingleDayItinerary schedule={item} index={index} key={index} />
        ))}
        <i className="fa-solid fa-xmark" onClick={closeModal}></i>
      </Modal>
    </div>
  );
};

export default PlannedTripItinerary;
