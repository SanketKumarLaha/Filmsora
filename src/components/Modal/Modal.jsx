import React, { useState } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const getUsername = () => {
  return localStorage.getItem("username");
};

const Modal = ({ showModal, setShowModal, movieName }) => {
  const [username, setUsername] = useState(getUsername());

  const handleClick = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
    localStorage.setItem("username", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    alert("Booked");
    window.location = "/";
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />
      <div className={styles.modalContent}>
        <div className={styles.formDiv}>
          <form onSubmit={handleSubmit}>
            <div className={styles.outerDiv}>
              <div>
                <label htmlFor="movieName">Movie Name</label>
                <input
                  type="text"
                  id="movieName"
                  name="movieName"
                  value={movieName}
                  disabled
                />
              </div>
              <div>
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.submit}>
              <button type="submit">Book show</button>
            </div>
          </form>
        </div>

        <div className={styles.btn}>
          <button onClick={handleClick}>X</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
