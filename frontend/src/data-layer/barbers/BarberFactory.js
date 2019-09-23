// @flow

import { Factory } from 'rosie';
import faker from 'faker';

export default Factory.define('BarberFactory').attrs({
  name: faker.name.findName,
  description: faker.lorem.paragraph,
  picture: faker.image.imageUrl
})