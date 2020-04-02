/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRefillLocationInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  streetAddress: string,
  city: string,
  stateProvinceOrRegion?: string | null,
  zipCode: string,
  countryCode: string,
};

export type ModelRefillLocationConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  streetAddress?: ModelStringInput | null,
  city?: ModelStringInput | null,
  stateProvinceOrRegion?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  countryCode?: ModelStringInput | null,
  and?: Array< ModelRefillLocationConditionInput | null > | null,
  or?: Array< ModelRefillLocationConditionInput | null > | null,
  not?: ModelRefillLocationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRefillLocationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  streetAddress?: string | null,
  city?: string | null,
  stateProvinceOrRegion?: string | null,
  zipCode?: string | null,
  countryCode?: string | null,
};

export type DeleteRefillLocationInput = {
  id?: string | null,
};

export type ModelRefillLocationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  streetAddress?: ModelStringInput | null,
  city?: ModelStringInput | null,
  stateProvinceOrRegion?: ModelStringInput | null,
  zipCode?: ModelStringInput | null,
  countryCode?: ModelStringInput | null,
  and?: Array< ModelRefillLocationFilterInput | null > | null,
  or?: Array< ModelRefillLocationFilterInput | null > | null,
  not?: ModelRefillLocationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateRefillLocationMutationVariables = {
  input: CreateRefillLocationInput,
  condition?: ModelRefillLocationConditionInput | null,
};

export type CreateRefillLocationMutation = {
  createRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};

export type UpdateRefillLocationMutationVariables = {
  input: UpdateRefillLocationInput,
  condition?: ModelRefillLocationConditionInput | null,
};

export type UpdateRefillLocationMutation = {
  updateRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};

export type DeleteRefillLocationMutationVariables = {
  input: DeleteRefillLocationInput,
  condition?: ModelRefillLocationConditionInput | null,
};

export type DeleteRefillLocationMutation = {
  deleteRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};

export type GetRefillLocationQueryVariables = {
  id: string,
};

export type GetRefillLocationQuery = {
  getRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};

export type ListRefillLocationsQueryVariables = {
  filter?: ModelRefillLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRefillLocationsQuery = {
  listRefillLocations:  {
    __typename: "ModelRefillLocationConnection",
    items:  Array< {
      __typename: "RefillLocation",
      id: string,
      name: string,
      description: string | null,
      streetAddress: string,
      city: string,
      stateProvinceOrRegion: string | null,
      zipCode: string,
      countryCode: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRefillLocationSubscription = {
  onCreateRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};

export type OnUpdateRefillLocationSubscription = {
  onUpdateRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};

export type OnDeleteRefillLocationSubscription = {
  onDeleteRefillLocation:  {
    __typename: "RefillLocation",
    id: string,
    name: string,
    description: string | null,
    streetAddress: string,
    city: string,
    stateProvinceOrRegion: string | null,
    zipCode: string,
    countryCode: string,
  } | null,
};
