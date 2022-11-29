import React, { useEffect, useState } from "react";
import classes from "./FigureDetails.module.css";

function FigureDetails(props) {
  const figureStatusColorClassname = props.status;
  const figureFirstSeenEpisodeLink = props.firstEpisodeSeen; //initiate more understandable variable name
  const [figureFirstSeenEpisodeName, setFigureFirstSeenEpisodeName] =
    useState("");

  useEffect(() => {
    const fetchSingleEpisodeName = async () => {
      const res = await fetch(figureFirstSeenEpisodeLink);
      const episodeData = await res.json();
      setFigureFirstSeenEpisodeName(episodeData.name);
    };
    fetchSingleEpisodeName();
  });

  return (
    <li className={classes.list} key={props.id}>
      <div className={classes.card}>
        <div className={classes["img-div"]}>
          <img src={props.img} alt={props.title} className={classes.img}></img>
        </div>
        <div className={classes["figure-content"]}>
          <div>
            <h2 className={classes["figure-title"]}>{props.name}</h2>
            <div style={{ display: "flex" }}>
              <span
                className={
                  classes[`figure-status-color-${figureStatusColorClassname}`]
                }
              ></span>
              <span className={classes["figure-attribute"]}>
                {props.status} - {props.species}
              </span>
            </div>
          </div>
          <div className={classes.section}>
            <span>Last known location:</span>
            <h3
              className={classes["figure-attribute"]}
              style={{ marginTop: "0.2rem" }}
            >
              {props.lastLocation}
            </h3>
          </div>
          <div className={classes.section}>
            <span>First seen in:</span>
            <h3
              className={classes["figure-attribute"]}
              style={{ marginTop: "0.2rem" }}
            >
              {figureFirstSeenEpisodeName}
            </h3>
          </div>
        </div>
      </div>
    </li>
  );
}

export default FigureDetails;
