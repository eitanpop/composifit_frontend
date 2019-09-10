import React, { useState, useContext } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";
import { Mutation } from "react-apollo";

import EditExercise from "./AddExercise";
import AddSets from "./AddSets";
import { deleteExercise } from "@/graphql/meso";
import RefreshContext from "@/contexts/meso-refresh-context";

export default ({ exercise }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddSetsOpen, setIsAddSetsOpen] = useState(false);
  const refresh = useContext(RefreshContext);
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
          <DropdownItem onClick={() => setIsAddSetsOpen(true)}>
            Add Sets
          </DropdownItem>
          <DropdownItem divider />
          <Mutation
            mutation={deleteExercise()}
            variables={{ exerciseId: exercise.id }}
          >
            {removeExercise => {
              return (
                <DropdownItem
                  onClick={async () => {
                    await removeExercise();
                    refresh();
                  }}
                >
                  Delete Exercise
                </DropdownItem>
              );
            }}
          </Mutation>
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
