import React, { useState } from "react";
import { Button, Card, CardBody } from "reactstrap";
import { Mutation } from "react-apollo";

import Popup from "@/components/Common/Popup";
import AddExercise from "@/components/Exercise/AddExercise";
import AddCardio from "@/components/Exercise/AddCardio";
import Import from "@/components/Exercise/Import";
import ExerciseList from "@/components/Exercise/ExerciseList";
import CardioList from "@/components/Exercise/CardioList";

import { addCardio } from "@/graphql/meso";

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
  const [isShowingImport, setIsShowingImport] = useState(false);
  const [cardioObject, setCardioObject] = useState(defaultCardioState);
  const toggleAddExercise = () => {
    setIsShowingAddExercise(!isShowingAddExercise);
  };

  const toggleAddCardio = () => {
    setIsShowingAddCardio(!isShowingAddCardio);
  };

  const toggleImport = () => {
    setIsShowingImport(!isShowingImport);
  };

  const saveCardio = addCardio => async () => {
    cardioObject.date = date;
    cardioObject.mesoId = mesoId;
    console.log("cardioObject", cardioObject);
    await addCardio({ variables: cardioObject });
    refetch();
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
      <AddExercise
        isOpen={isShowingAddExercise}
        toggle={() => setIsShowingAddExercise(!isShowingAddExercise)}
        exercise={{ id: 0, date, mesoId }}
      />
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

      <Import
        isOpen={isShowingImport}
        setIsOpen={setIsShowingImport}
        mesoId={mesoId}
        currentDate={date}
      />
      <Card>
        <CardBody>
          <Button
            xl="3"
            color="dark"
            onClick={() => {
              toggleAddExercise();
              refetch();
            }}
          >
            ADD EXERCISE
          </Button>
          <Button
            color="primary"
            className="ml-2"
            onClick={() => {
              setCardioObject(defaultCardioState);
              toggleAddCardio();
            }}
          >
            ADD CARDIO
          </Button>
          <Button color="success" className="ml-2" onClick={toggleImport}>
            COPY FROM ANOTHER DAY
          </Button>
          <Button color="warning" className="ml-2">
            SYNC
          </Button>
        </CardBody>
      </Card>
      <ExerciseList date={date} exercises={exercises} />
      <CardioList
        date={date}
        cardios={cardios}
        cardioEditCallback={showEditCardio}
      />
    </>
  );
};
