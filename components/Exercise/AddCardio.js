import React from "react";
import { Card, Form, FormGroup, Label, Input } from "reactstrap";

const updateFormObject = (key, formObject, setFormObject) => e => {
  setFormObject({ ...formObject, [key]: e.target.value });
};

export default ({ formObject, setFormObject }) => {
  const { name, timeInMinutes, intensity } = formObject;
  return (
    <Card>
      <Form>
        <FormGroup>
          <Label for="exerciseName">Cardio Name</Label>
          <Input
            name="exerciseName"
            id="exerciseName"
            onChange={updateFormObject("name", formObject, setFormObject)}
            value={name || ""}
          />
          <Label for="timeInMinutes">Time in minutes:</Label>
          <Input
            type="number"
            name="timeInMinutes"
            id="timeInMinutes"
            onChange={updateFormObject(
              "timeInMinutes",
              formObject,
              setFormObject
            )}
            value={timeInMinutes || ""}
          />
        </FormGroup>
        <FormGroup>
          <Label for="intensity">Intensity</Label>
          <Input
            type="select"
            name="intensity"
            id="intensity"
            onChange={updateFormObject(
              "intensity",
              formObject,
              setFormObject
            )}
            value={intensity || ""}
          >
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
