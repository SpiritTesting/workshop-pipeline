import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '9bacf391-7088-4fa5-b28f-8b7e46ade246',
};

export const sampleWithPartialData: IAuthority = {
  name: '5495b55f-daaf-46a5-b6d7-7f047dbc6c9b',
};

export const sampleWithFullData: IAuthority = {
  name: '40974d8c-a97d-4223-8695-42c7b78829a9',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
