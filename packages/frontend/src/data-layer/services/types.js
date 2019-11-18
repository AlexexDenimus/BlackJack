// @flow

export type ServiceDto = {
  id: string,
  name: string,
  price: number,
  publicId: string,
};

export type ServicesMapper = {
  list: ServiceDto[],
};
