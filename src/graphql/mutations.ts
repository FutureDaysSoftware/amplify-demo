// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createRefillLocation = /* GraphQL */ `
  mutation CreateRefillLocation(
    $input: CreateRefillLocationInput!
    $condition: ModelRefillLocationConditionInput
  ) {
    createRefillLocation(input: $input, condition: $condition) {
      id
      name
      description
      streetAddress
      city
      stateProvinceOrRegion
      zipCode
      countryCode
    }
  }
`;
export const updateRefillLocation = /* GraphQL */ `
  mutation UpdateRefillLocation(
    $input: UpdateRefillLocationInput!
    $condition: ModelRefillLocationConditionInput
  ) {
    updateRefillLocation(input: $input, condition: $condition) {
      id
      name
      description
      streetAddress
      city
      stateProvinceOrRegion
      zipCode
      countryCode
    }
  }
`;
export const deleteRefillLocation = /* GraphQL */ `
  mutation DeleteRefillLocation(
    $input: DeleteRefillLocationInput!
    $condition: ModelRefillLocationConditionInput
  ) {
    deleteRefillLocation(input: $input, condition: $condition) {
      id
      name
      description
      streetAddress
      city
      stateProvinceOrRegion
      zipCode
      countryCode
    }
  }
`;
