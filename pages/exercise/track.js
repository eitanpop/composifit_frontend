import React, { useState } from "react";
import { Collapse } from "reactstrap";
import { Query } from "react-apollo";

import ExerciseHeader from "@/components/Exercise/TrackExerciseHeader";
import ExerciseBody from "@/components/Exercise/TrackExerciseBody";
import ContentWrapper from "@/components/Layout/ContentWrapper";
import withAppSyncData from "@/lib/withAppSyncData";
import { getUserSets } from "@/graphql/track";

const Track = ({ query }) => {
  const [isOpen, setIsOpen] = useState({});
  const mesoId = 47;
  const date =
    query.date ||
    (() => {
      const d = new Date();
      return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    })();
  console.log(date);
  return (
    <ContentWrapper>
      <Query
        query={getUserSets(`name
        exercises{
          id
          name
          sets{
            reps
            weight
          userSet{
            id
            actualReps
            actualWeight
          }
        }
          }`)}
        variables={{ mesoId, date }}
      >
        {({ data, loading }) => {
          console.log(data);
          if (loading || !data.getUserSets) return <div>Loading...</div>;
          return data.getUserSets.exercises.map(exercise => {
            const { name, userSets } = exercise;
            return (
              <div key={exercise.id}>
                <div
                  onClick={() =>
                    setIsOpen({
                      ...isOpen,
                      [`tab${exercise.id}`]: !isOpen[`tab${exercise.id}`]
                    })
                  }
                  className="mt-3"
                >
                  <ExerciseHeader name={name} />
                </div>
                <Collapse
                  isOpen={isOpen[`tab${exercise.id}`]}
                  style={{ backgroundColor: "White" }}
                  className="pb-1 mx-2"
                >
                  <ExerciseBody userSets={userSets} />
                </Collapse>
              </div>
            );
          });
        }}
      </Query>      
    </ContentWrapper>
  );
};

Track.getInitialProps = async ({ query }) => {
  return { query };
};

export default withAppSyncData(Track);
