import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 21745,
  login: 'bhRo6O',
};

export const sampleWithPartialData: IUser = {
  id: 17104,
  login: 'Q8',
};

export const sampleWithFullData: IUser = {
  id: 28281,
  login: 'Pe',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
