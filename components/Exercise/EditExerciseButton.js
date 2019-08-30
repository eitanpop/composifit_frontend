import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

import EditExercise from "./AddExercise";
import AddSets from "./AddSets"

export default ({ exercise }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddSetsOpen, setIsAddSetsOpen] = useState(false);
  const [isDeleteExerciseOpen, setIsDeleteExerciseOpen] = useState(false);

  return (
    <>
      <ButtonDropdown
        isOpen={isMenuOpen}
        toggle={() => setIsMenuOpen(!isMenuOpen)}
      >
        <DropdownToggle caret color="secondary">
          Actions
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setIsEditOpen(true)}>
            Edit Exercise
          </DropdownItem>
          <DropdownItem onClick={() => setIsAddSetsOpen(true)}>Add Sets</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Delete Exercise</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <EditExercise
        isOpen={isEditOpen}
        toggle={() => setIsEditOpen(!isEditOpen)}
        exercise={exercise}
      />
      <AddSets
        isOpen={isAddSetsOpen}
        toggle={() => setIsAddSetsOpen(!isAddSetsOpen)}
        exerciseId={exercise.id}
      />
    </>
  );
};
