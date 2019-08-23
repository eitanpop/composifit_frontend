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

export const getMeso = (...params) =>
  getParameterizedGql(params, parameters => {
    return gql`
    query GetMeso($id: ID!) {
      getMeso(id: $id) 
        {${parameters}} 
      
    }
  `;
  });

  export const getMesos = (...params) =>
  getParameterizedGql(params, parameters => {
    return gql`
    query GetMesos {
      getMesos
      {${parameters}}       
    }
  `;
  });



const getParameterizedGql = (params, getGql) => {
  const parameters = Array.prototype.join.call(params, " ");
  return getGql(parameters);
};

export const getMesoDay = () =>
  gql`
    query GetMesoByDay($id: ID!, $date: String) {
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
  gql`
    mutation AddExercise(
      $id: ID
      $name: String!
      $sets: Int!
      $reps: Int!
      $weight: String
      $date: String!
      $mesoId: Int!
    ) {
      addExercise(
        id: $id
        name: $name
        sets: $sets
        reps: $reps
        weight: $weight
        date: $date
        mesoId: $mesoId
      )
    }
  `;

export const addCardio = () =>
  gql`
    mutation AddCardio(
      $id: ID
      $name: String!
      $timeInMinutes: Int!
      $date: String!
      $mesoId: Int!
    ) {
      addCardio(
        id: $id
        name: $name
        timeInMinutes: $timeInMinutes
        date: $date
        mesoId: $mesoId
      )
    }
  `;
