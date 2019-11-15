// @flow

export type ServiceDto = {
  id: string,
  name: string,
  price: number,
};

export type ServicesMapper = {
  list: ServiceDto[],
};
