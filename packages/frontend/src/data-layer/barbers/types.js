// @flow

export type BarberDto = {
  id: string,
  picture: {
    src: string,
    alt: string,
    mimetype: string,
  },
  name: string,
  description: string,
  publicId: string,
};

export type BarbersMapper = {
  list: BarberDto[],
};
