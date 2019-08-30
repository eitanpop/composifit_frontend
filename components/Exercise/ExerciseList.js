import React from "react";
import { Card, CardHeader, CardBody, Table, Button } from "reactstrap";

import ExerciseHeader from "@/components/Exercise/ExerciseHeader";
import SortableList from "@/components/Exercise/SortableSets";

export default ({ date, exercises, exerciseEditCallback }) => {
  console.log(date);
  const longDateString = `${date.getMonth() +
    1}/${date.getDate()}/${date.getFullYear()}`;
  console.log(exercises.map);
  return (
    <Card>
      <CardHeader>
        Exercises for {longDateString}
        <span className="pull-right float-right" />
      </CardHeader>
      <CardBody>
        {!exercises.length ? (
          <>
            <div>Nothing to show here</div>
          </>
        ) : (
          exercises.map((exercise, idx) => {
            const {sets} = exercise;
            return (
              <React.Fragment key={exercise.id}>
                <ExerciseHeader
                 exercise={exercise}
                  idx={idx + 1}
                />
                {sets.length > 0 ? (
                  <>
                    <SortableList sets={sets} />
                  </>
                ) : (
                  <div>No sets</div>
                )}
                <Button
                  color="primary"
                  onClick={exerciseEditCallback(exercise)}
                  hidden
                >
                  Edit
                </Button>
                <br />
                <br />
              </React.Fragment>
            );
          })
        )}
      </CardBody>
    </Card>
  );
};
