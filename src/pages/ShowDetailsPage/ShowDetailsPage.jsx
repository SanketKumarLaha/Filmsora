import React, { useEffect, useState } from "react";
import styles from "./ShowDetailsPage.module.css";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

const ShowDetailsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [state, setState] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await res.json();
    setState(json);
  };

  const handleModal = () => {
    setShowModal(!showModal);
  };

  if (!state) return;
  const show = state.find((item) => item.show.id == id);
  const summary = show?.show.summary;
  const movieName = show?.show?.name;

  return (
    <div className={styles.summary}>
      <div className={styles.mainbody}>
        <div
          className={styles.summaryContent}
          dangerouslySetInnerHTML={{ __html: summary }}
        />
        <div className={styles.btn}>
          <button onClick={handleModal} className={styles.btn}>
            Book ticket
          </button>
        </div>
        {showModal && (
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            movieName={movieName}
          />
        )}
      </div>
    </div>
  );
};

export default ShowDetailsPage;
