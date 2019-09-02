import gql from "graphql-tag";

import getParameterizedGql from "./getParamaterizedGql";

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
          muscleGroup
          mesoId
          sets{ 
            id           
            reps
            weight
          }
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
      $date: String!
      $mesoId: Int!
    ) {
      addExercise(
        id: $id
        name: $name      
        date: $date
        mesoId: $mesoId
      )
    }
  `;

  export const addSet = () =>
  gql`
    mutation AddSet(      
      $reps: Int!      
      $weight: String!
      $exerciseId: Int!
    ) {
      addSet(      
        reps: $reps      
        weight: $weight
        exerciseId: $exerciseId
      )
    }
  `;

  export const deleteSet = () =>
  gql`
    mutation DeleteSet(      
      $setId: ID!     
    ) {
      deleteSet(      
        setId: $setId           
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
