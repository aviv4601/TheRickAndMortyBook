import React from "react";
import Card from "../UI/Card";
import FigureDetails from "./FigureDetails";
import classes from "./FigureList.module.css";

function FiguresList(props) {
  const listOfFigures = props.figures;
  return (
    <div className={classes.container}>
      {listOfFigures.map((figure) => (
        <Card>
          <ul className={classes.ul}>
            <FigureDetails
              name={figure.name}
              id={figure.id}
              status={figure.status}
              firstEpisodeSeen={figure.episode[0]}
              species={figure.species}
              lastLocation={figure.location.name}
              img={figure.image}
            />
          </ul>
        </Card>
      ))}
    </div>
  );
}

export default FiguresList;
