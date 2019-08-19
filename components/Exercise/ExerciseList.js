import React from "react";
import { Card, CardHeader, CardBody, Table, Button } from "reactstrap";

export default ({ date, exercises }) => {
  const { day, month, year } = date;
  const longDateString = `${month}/${day}/${year}`;
  console.log(exercises.map);
  return (
    <Card>
      <CardHeader>
        Exercises for {longDateString}
        <span className="pull-right float-right" />
      </CardHeader>
      <CardBody>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Exercise Name</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>Weight</th>
              <th>Muscle Group</th>
            </tr>
          </thead>
          <tbody>
            {!exercises.length ? (
              <>
                <tr>
                  <td colSpan="5">Nothing to show here</td>
                </tr>
              </>
            ) : (
              exercises.map(exercise => {
                const { name, sets, reps, weight, muscleGroup } = exercise;
                return (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{sets}</td>
                    <td>{reps}</td>
                    <td>{weight} lbs</td>
                    <td>{muscleGroup}</td>
                    <td align="center">
                      <Button color="primary">Edit</Button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};
