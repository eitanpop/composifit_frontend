import React, { useState } from "react";
import { Card, Form, FormGroup, Label, Input } from "reactstrap";



const updateFormObject = (key, formObject, setFormObject) => e => {
  setFormObject({ ...formObject, [key]: e.target.value });
};



export default ({formObject, setFormObject}) => {
  const { name, sets, reps, weight, muscleGroup } = formObject;

  return (
    <Card>
      <Form>
        <FormGroup>
          <Label for="exerciseName">Exercise Name</Label>
          <Input
            name="exerciseName"
            id="exerciseName"
            onChange={updateFormObject("name", formObject, setFormObject)}
            value={name || ''}
          />
          <Label for="sets">Sets</Label>
          <Input
            type="number"
            name="sets"
            id="sets"
            onChange={updateFormObject("sets", formObject, setFormObject)}
            value={sets || ''}
          />
          <Label for="reps">Reps</Label>
          <Input
            type="number"
            name="reps"
            id="reps"
            onChange={updateFormObject("reps", formObject, setFormObject)}
            value={reps || ''}
          />
          <Label for="weight">Weight</Label>
          <Input
            type="number"
            name="weight"
            id="weight"
            onChange={updateFormObject("weight", formObject, setFormObject)}
            value={weight || ''}
          />
        </FormGroup>
        <FormGroup>
          <Label for="muscleGroup">Muscle Group</Label>
          <Input
            type="select"
            name="select"
            id="muscleGroup"
            onChange={updateFormObject("muscleGroup", formObject, setFormObject)}
            value={muscleGroup || ''}
          >
            <option>Neck</option>
            <option>Chest</option>
            <option>Upper Back</option>
            <option>Lower Back</option>
            <option>Traps</option>
            <option>Lats</option>
            <option>Biceps</option>
            <option>Triceps</option>
            <option>Forearms</option>
            <option>Abs</option>
            <option>Glutes</option>
            <option>Quads</option>
            <option>Hamstring</option>
            <option>Calves</option>
          </Input>
        </FormGroup>
      </Form>
    </Card>
  );
  // return date && <div >{`${date.month}/${date.day}/${date.year}`}</div>;
};
