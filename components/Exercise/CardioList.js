import React from "react";
import { Card, CardHeader, CardBody, Table, Button } from "reactstrap";

export default ({ date, cardios, cardioEditCallback }) => {
  const longDateString = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  console.log(cardios)
  return (
    <Card>
      <CardHeader>
        Cardio for {longDateString}
        <span className="pull-right float-right" />
      </CardHeader>
      <CardBody>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Cardio Name</th>
              <th>Intensity</th>
              <th>Time</th>            
            </tr>
          </thead>
          <tbody>
          {!cardios.length ? (
              <>
                <tr>
                  <td colSpan="5">Nothing to show here</td>
                </tr>
              </>
            ) : (
              cardios.map(cardio => {
                const { name, intensity, timeInMinutes } = cardio;
                return (
                  <tr key={name}>
                    <td>{name}</td>
                    <td>{intensity}</td>
                    <td>{timeInMinutes} minutes</td>                    
                    <td align="center">
                      <Button color="primary" onClick={cardioEditCallback(cardio)}>Edit</Button>
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
