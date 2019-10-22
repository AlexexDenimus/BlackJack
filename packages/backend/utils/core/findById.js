module.exports = async function findById(model, id) {
  const value = await model.findOne({ publicId: id });

  if (!value) {
    // try {
      const result = await model.findById(id);
      return result;
    // } catch (err) {
    //   return await model.findOne();
    // }
  }

  return value;
};
