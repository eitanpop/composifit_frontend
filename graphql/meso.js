import gql from "graphql-tag";

export const createMeso = () =>
  gql`
    mutation CreateMeso(
      $name: String!
      $beginDate: String!
      $endDate: String!
    ) {
      createMeso(name: $name, beginDate: $beginDate, endDate: $endDate)
    }
  `;

export const getMeso = () =>
  gql`
    query GetMeso($id: ID!) {
      getMeso(id: $id) {
        name
        beginDate
        endDate        
      }
    }
  `;

export const getMesoDay = () =>
  gql`
    query GetMesoByDay($id: ID!, $date: String!) {
      getMesoByDay(id: $id, date: $date) {
        meso {
          id
          name
          beginDate
          endDate
        }
        exercises {
          id
          name
          date
          sets
          reps
          weight
          muscleGroup
          mesoId
        }
        cardios {
          id
          name
          date
          timeInMinutes
          intensity
          mesoId
        }
      }
    }
  `;

export const addExercise = () =>
gql`mutation AddExercise($name: String!, $sets: Int!, $reps: Int!, $weight: String, $date: String!, $mesoId: Int!){
  addExercise(name:$name,sets:$sets, reps:$reps, weight:$weight, date:$date, mesoId: $mesoId)
}`;

export const addCardio = () => {};
