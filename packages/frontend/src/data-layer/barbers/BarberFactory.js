// @flow

import { Factory } from 'rosie';
import faker from 'faker';

export default Factory.define('BarberFactory').attrs({
  id: faker.random.uuid,
  name: faker.name.findName,
  description: faker.lorem.paragraph,
  picture: faker.image.imageUrl,
});
