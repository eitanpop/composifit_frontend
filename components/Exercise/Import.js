import React, { useState, useCallback, useContext } from "react";
import { Mutation } from "react-apollo";

import Calendar from "@/components/Common/Calendar";
import Popup from "@/components/Common/Popup";
import { clone } from "@/graphql/meso";
import RefreshContext from "@/contexts/meso-refresh-context";

export default ({ isOpen, setIsOpen, mesoId, currentDate }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = useCallback(e => {
    setSelectedDate(e);
  });

  const refresh = useContext(RefreshContext);

  const toggleImport = () => setIsOpen(!isOpen);
  return (
    <Mutation
      mutation={clone()}
      variables={{
        mesoId,
        fromDate:
          selectedDate.getFullYear() +
          "-" +
          (selectedDate.getMonth() + 1) +
          "-" +
          selectedDate.getDate(),
        toDate:
          currentDate.getFullYear() +
          "-" +
          (currentDate.getMonth() + 1) +
          "-" +
          currentDate.getDate()
      }}
    >
      {cloneCardioAndExercises => {
        return (
          <Popup
            header="Import"
            toggle={toggleImport}
            isOpen={isOpen}
            saveText="Import"
            onSave={async () => {
              await cloneCardioAndExercises();
              refresh();
            }}
          >
            <Calendar
              onChange={handleDateClick}
              value={selectedDate}
              className="border-0 mx-auto"
            />
          </Popup>
        );
      }}
    </Mutation>
  );
};
