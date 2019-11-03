module.exports = async function findById(model, id) {
  if (id === '1') {
    return undefined;
  }

  const value = await model.findOne({ publicId: id });

  if (!value) {
    const result = await model.findById(id);
    return result;
  }

  return value;
};
