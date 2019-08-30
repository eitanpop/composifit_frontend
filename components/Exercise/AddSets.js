import React, { useState, useContext } from "react";
import { Mutation } from "react-apollo";
import { Card, Input, Form, FormGroup, Label } from "reactstrap";

import Popup from "@/components/Common/Popup";
import { addSet } from "@/graphql/meso";
import MesoRefreshContext from "@/contexts/meso-refresh-context";

//todo:refactor into AddEditForm component
export default ({ exerciseId, isOpen, toggle }) => {
  console.log(exerciseId);
  const refresh = useContext(MesoRefreshContext);
  const [formObject, setFormObject] = useState({ exerciseId });

  const updateFormObject = property => e => {
    setFormObject({ ...formObject, [property]: e.target.value });
  };
  const { weight, reps } = formObject;
  return (
    <Mutation mutation={addSet()}>
      {addSet => {
        const saveSet = async () => {
          await addSet({ variables: formObject });
          refresh();
        };
        return (
          <Popup
            header="Add Set"
            toggle={toggle}
            isOpen={isOpen}
            onSave={saveSet}
          >
            <Card>
              <Form>
                <FormGroup>
                  <Input
                    name="exerciseId"
                    id="exerciseId"
                    type="hidden"
                    value={exerciseId}
                  />
                  <Label for="reps">Reps</Label>
                  <Input
                    name="reps"
                    id="reps"
                    onChange={updateFormObject("reps")}
                    value={reps || ""}
                  />
                  <Label for="weight">Weight</Label>
                  <Input
                    name="weight"
                    id="weight"
                    onChange={updateFormObject("weight")}
                    value={weight || ""}
                  />
                </FormGroup>
              </Form>
            </Card>
          </Popup>
        );
      }}
    </Mutation>
  );
};
