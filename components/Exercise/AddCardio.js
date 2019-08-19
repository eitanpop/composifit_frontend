import React from "react";
import { Card, Form, FormGroup, Label, Input } from "reactstrap";

export default () => {
  return (
    <Card>
      <Form>
        <FormGroup>
          <Label for="exerciseName">Cardio Name</Label>
          <Input name="exerciseName" id="exerciseName" />
          <Label for="sets">Time in minutes:</Label>
          <Input type="number" name="sets" id="sets" />
        </FormGroup>
        <FormGroup>
          <Label for="intensity">Intensity</Label>
          <Input type="select" name="select" id="intensity">
            <option>Very Light</option>
            <option>Light</option>
            <option>Moderate</option>
            <option>Difficult</option>
            <option>Extreme</option>
          </Input>
        </FormGroup>
      </Form>
    </Card>
  );
  // return date && <div >{`${date.month}/${date.day}/${date.year}`}</div>;
};
