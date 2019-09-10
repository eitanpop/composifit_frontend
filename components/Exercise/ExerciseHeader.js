import React from "react";

import EditExerciseButton from "./EditExerciseButton";

export default ({ exercise, idx }) => {
  const { name, muscleGroup, sets } = exercise;
  console.log("sets", sets);
  const totalWeight =
    sets.length > 1
      ? sets.reduce((p, c) => p + parseFloat(c.weight || 0), 0)
      : sets.length === 1
      ? parseFloat(sets[0].weight)
      : 0;
  return (
    <div className="card-body text-center bg-gray-dark">
      <div className="row h-100">
        <div className="col-4 my-auto text-left">
          <h3 className="m-0">
            {idx}. {name}
          </h3>
        </div>
        <div className="col-2">
          <h3 className="m-0">{sets.length}</h3>
          <p className="m-0">Total Sets</p>
        </div>
        <div className="col-2">
          <h3 className="m-0">{totalWeight}lbs</h3>
          <p className="m-0">Total Weight</p>
        </div>
        <div className="col-2">
          <h3 className="m-0">{"Chest"}</h3>
          <p className="m-0">Muscle Group</p>
        </div>

        <div className="col-2 my-auto text-right">
          <EditExerciseButton exercise={exercise} />
        </div>
      </div>
    </div>
  );
};
