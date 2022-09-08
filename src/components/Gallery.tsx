import "./Gallery.css";
import Modal from "react-modal";
import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { useParams } from "react-router-dom";
import { PlannedTripsContext } from "../context/PlannedTripsContext";
import TheRealPlannedTrip from "../models/TheRealPlannedTrips";

Modal.setAppElement("#root");

const Gallery = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const tripId: string | undefined = useParams().tripId;
  const { pastTrips, addPhotosToTrip } = useContext(PlannedTripsContext);

  const [trip, setTrip] = useState<TheRealPlannedTrip | null>(null);

  useEffect(() => {
    setTrip(pastTrips.find((item) => item._id === tripId)!);
  }, [pastTrips, tripId]);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const files = fileInputRef.current?.files;
    if (files && files[0]) {
      const file = files[0]; // Here is the file we need
      const storageRef = ref(storage, `trip_photos/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          addPhotosToTrip(trip!._id!, url, trip!.uid);
        });
      });
    }
  }

  return (
    <main className="Gallery">
      <button onClick={openModal} className="open-modal-button">
        Add Photos
      </button>
      <Modal
        className="modal"
        overlayClassName="overlay-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} className="choose-file-button">
          <input ref={fileInputRef} type="file" />
          <button className="upload-button">Upload Pics!</button>
        </form>
      </Modal>

      <div className="photo-container">
        {trip &&
          trip.photos.length > 0 &&
          trip.photos.map((photo, index) => <img src={photo} key={index} />)}
      </div>
    </main>
  );
};

export default Gallery;
