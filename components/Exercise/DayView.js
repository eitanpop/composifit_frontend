import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { Mutation, Query } from "react-apollo";

import Popup from "@/components/Common/Popup";

import AddExercise from "@/components/Exercise/AddExercise";
import AddCardio from "@/components/Exercise/AddCardio";
import Import from "@/components/Exercise/Import";
import ExerciseList from "@/components/Exercise/ExerciseList";
import CardioList from "@/components/Exercise/CardioList";

import { addExercise } from "@/graphql/meso";

const defaultState = {
  name: "",
  sets: null,
  reps: null,
  weight: null,
  muscleGroup: null
};

export default ({ date = null, exercises, cardios, mesoId, refetch }) => {
  if (!date) return null;
  const [isShowingAddExercise, setIsShowingAddExercise] = useState(false);
  const [isShowingAddCardio, setIsShowingAddCardio] = useState(false);
  const [isShowingImport, setisShowingImport] = useState(false);
  const [formObject, setFormObject] = useState(defaultState);

  const toggleAddExercise = () => {
    setIsShowingAddExercise(!isShowingAddExercise);
  };

  const toggleAddCardio = () => {
    setIsShowingAddCardio(!isShowingAddCardio);
  };

  const toggleImport = () => {
    setisShowingImport(!isShowingImport);
  };

  const saveExercise = addExercise => async () => {
    formObject.date = new Date(`${date.year}-${date.month}-${date.day}`);
    formObject.mesoId = mesoId;

    console.log(formObject);
    //   console.log(addExercise);
    await addExercise({
      variables: formObject
    });
    refetch();
  };

  return (
    <>
      <Mutation mutation={addExercise()}>
        {(addExercise, { data }) => {
          return (
            <Popup
              header="Add Exercise"
              toggle={toggleAddExercise}
              isOpen={isShowingAddExercise}
              onSave={saveExercise(addExercise)}
            >
              <AddExercise
                setFormObject={setFormObject}
                formObject={formObject}
              />
            </Popup>
          );
        }}
      </Mutation>
      <Popup
        header="Add Cardio"
        toggle={toggleAddCardio}
        isOpen={isShowingAddCardio}
      >
        <AddCardio />
      </Popup>
      <Popup
        header="Import"
        toggle={toggleImport}
        isOpen={isShowingImport}
        saveText="Import"
      >
        <Import />
      </Popup>
      <Card>
        <CardBody>
          <Button xl="3" color="primary" onClick={toggleAddExercise}>
            ADD EXERCISE
          </Button>
          <Button color="dark" className="ml-2" onClick={toggleAddCardio}>
            ADD CARDIO
          </Button>
          <Button color="success" className="ml-2" onClick={toggleImport}>
            COPY FROM ANOTHER DAY
          </Button>
          <Button color="warning" className="ml-2">
            SYNC
          </Button>
          <Button color="danger" className="ml-2 float-right">
            REMOVE ALL EXERCISES AND CARDIO
          </Button>
        </CardBody>
      </Card>
      <ExerciseList date={date} exercises={exercises} />
      <CardioList date={date} cardios={cardios} />
    </>
  );
};

// return date && <div >{`${date.month}/${date.day}/${date.year}`}</div>;
