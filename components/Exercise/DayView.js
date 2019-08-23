import React, { useState, useEffect } from "react";
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
  id: null,
  name: "",
  sets: null,
  reps: null,
  weight: null,
  muscleGroup: null
};

const defaultCardioState = {
  id: null,
  name: "",
  timeInMinutes: "",
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
    exerciseObject.date = date;
    exerciseObject.mesoId = mesoId;
    console.log("exerciseObject", exerciseObject);
    await addExercise({ variables: exerciseObject });
    refetch();
  };

  const saveCardio = addCardio => async () => {
    cardioObject.date = date;
    cardioObject.mesoId = mesoId;
    console.log("cardioObject", cardioObject);
    await addCardio({ variables: cardioObject });
    refetch();
  };

  const showEditExercise = exercise => () => {
    const { id, name, sets, reps, weight, muscleGroup } = exercise;
    setExerciseObject({
      id,
      name,
      sets,
      reps,
      weight,
      muscleGroup
    });
    toggleAddExercise();
  };

  const showEditCardio = cardio => () => {
    const { id, name, timeInMinutes, intensity } = cardio;
    setCardioObject({
      id,
      name,
      timeInMinutes,
      intensity
    });
    toggleAddCardio();
  };

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
          <Button
            xl="3"
            color="primary"
            onClick={() => {
              setExerciseObject(defaultExerciseState);
              toggleAddExercise();
            }}
          >
            ADD EXERCISE
          </Button>
          <Button color="dark" className="ml-2"  onClick={() => {
              setCardioObject(defaultCardioState);
              toggleAddCardio();             
            }}>
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
      <ExerciseList
        date={date}
        exercises={exercises}
        exerciseEditCallback={showEditExercise}
      />
      <CardioList
        date={date}
        cardios={cardios}
        cardioEditCallback={showEditCardio}
      />
    </>
  );
};

// return date && <div >{`${date.month}/${date.day}/${date.year}`}</div>;
