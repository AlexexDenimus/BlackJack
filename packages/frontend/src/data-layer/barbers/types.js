// @flow

export type BarberDto = {
  id: string,
  picture: string,
  name: string,
  description: string,
};

export type BarbersMapper = {
  list: BarberDto[],
};
