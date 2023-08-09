import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    callApi();
  }, []);

  const callApi = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const json = await res.json();
    setState(json);
  };
  return (
    <div className={styles.homepage}>
      {state &&
        state.map((item, index) => {
          return (
            <div key={index} className={styles.card}>
              <div className={styles.imageDiv}>
                <img
                  src={item.show.image?.original}
                  alt={`${item.show.name} Movie`}
                />
              </div>
              <div className={styles.lowerbody}>
                <div className={styles.details}>
                  <h2>{item.show.name}</h2>
                  <div className={styles.genres}>
                    {item.show.genres.map((genre, index) => (
                      <React.Fragment key={index}>
                        {genre}
                        {index !== item.show.genres.length - 1 && (
                          <span>&nbsp;</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className={styles.btn}>
                  <Link to={`/summary/${item.show.id}`}>
                    <button>Summary</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
