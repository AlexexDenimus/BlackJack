const uuid = require('uuid/v4');

const DEFAULT_FIELD_NAME = 'publicId';

module.exports = function createPublicId(schema, options = {}) {
  const { fieldName = DEFAULT_FIELD_NAME } = options;

  if (schema.path(fieldName)) {
    throw new Error(
      `createPublicId cannot add ${fieldName} schema property, since it is already defined`
    );
  }

  schema.path(fieldName, {
    type: String,
    default: uuid,
    unique: true
  });
};