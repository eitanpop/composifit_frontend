import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { Mutation } from "react-apollo";

import Popup from "@/components/Common/Popup";
import AddExercise from "@/components/Exercise/AddExercise";
import AddCardio from "@/components/Exercise/AddCardio";
import Import from "@/components/Exercise/Import";
import ExerciseList from "@/components/Exercise/ExerciseList";
import CardioList from "@/components/Exercise/CardioList";

import { addExercise, addCardio } from "@/graphql/meso";

const defaultExerciseState = {
  name: "",
  sets: null,
  reps: null,
  weight: null,
  muscleGroup: null
};

const defaultCardioState = {
  name: "",
  date: "",
  intensity: ""
};

export default ({ date = null, exercises, cardios, mesoId, refetch }) => {
  if (!date) return null;
  const [isShowingAddExercise, setIsShowingAddExercise] = useState(false);
  const [isShowingAddCardio, setIsShowingAddCardio] = useState(false);
  const [isShowingImport, setisShowingImport] = useState(false);
  const [exerciseObject, setExerciseObject] = useState(defaultExerciseState);
  const [cardioObject, setCardioObject] = useState(defaultCardioState);

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
    exerciseObject.date = new Date(`${date.year}-${date.month}-${date.day}`);
    exerciseObject.mesoId = mesoId;
    await addExercise({ variables: exerciseObject });
    refetch();
  };

  const saveCardio = addCardio => async () => {
    cardioObject.date = new Date(`${date.year}-${date.month}-${date.day}`);
    cardioObject.mesoId = mesoId
    await addCardio({ variables: cardioObject });
    refetch();
  }

  return (
    <>
      <Mutation mutation={addExercise()}>
        {addExercise => {
          return (
            <Popup
              header="Add Exercise"
              toggle={toggleAddExercise}
              isOpen={isShowingAddExercise}
              onSave={saveExercise(addExercise)}
            >
              <AddExercise
                setFormObject={setExerciseObject}
                formObject={exerciseObject}
              />
            </Popup>
          );
        }}
      </Mutation>
      <Mutation mutation={addCardio()}>
        {addCardio => {
          return (
            <Popup
              header="Add Cardio"
              toggle={toggleAddCardio}
              isOpen={isShowingAddCardio}
              onSave={saveCardio(addCardio)}
            >
              <AddCardio
                setFormObject={setCardioObject}
                formObject={cardioObject}
              />
            </Popup>
          );
        }}
      </Mutation>
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
