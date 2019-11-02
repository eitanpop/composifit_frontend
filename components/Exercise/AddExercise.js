import React, { useState, useContext } from "react";
import { Mutation } from "react-apollo";
import { Card, Form, FormGroup, Label, Input } from "reactstrap";

import Popup from "@/components/Common/Popup";
import { addExercise } from "@/graphql/meso";
import MesoRefreshContext from "@/contexts/meso-refresh-context"

export default ({ exercise, isOpen, toggle }) => {
  const refresh = useContext(MesoRefreshContext);
  const [formObject, setFormObject] = useState({ name:exercise.name, muscleGroup:exercise.muscleGroup });
  const {muscleGroup, name} = formObject;
  const { id, date,mesoId } = exercise;
  return (
    <Mutation mutation={addExercise()}>
      {addExercise => {
        const updateFormObject = property => e => {
          setFormObject({...formObject,[property]: e.target.value});
        };

        const saveExercise = async () => {     
          console.log("exerciseObject", formObject);
          await addExercise({ variables: {mesoId, date, id, ...formObject}});
          setFormObject({muscleGroup:"", name:""})
          refresh();
        };

        return (
          <Popup
            header={`${id > 0 ? "Edit" : "Add"} Exercise`}
            toggle={toggle}
            isOpen={isOpen}
            onSave={saveExercise}
          >
            <Card>
              <Form>
                <FormGroup>
                  <Input
                    name="exerciseId"
                    id="exerciseId"
                    type="hidden"
                    value={id || ""}
                  />
                  <Label for="exerciseName">Exercise Name</Label>
                  <Input
                    name="exerciseName"
                    id="exerciseName"
                    onChange={updateFormObject("name")}
                    value={name || ""}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="muscleGroup">Muscle Group</Label>
                  <Input
                    type="select"
                    name="select"
                    id="muscleGroup"
                    onChange={updateFormObject("muscleGroup")}
                    value={muscleGroup || ""}
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
          </Popup>
        );
      }}
    </Mutation>
  );
};
