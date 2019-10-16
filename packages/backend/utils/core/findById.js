module.exports = async function findById(model, id) {
  const value = await model.findOne({ publicId: id });

  if (!value) {
    return await model.findById(id);
  }

  return value;
};
