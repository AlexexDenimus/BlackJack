module.exports = async function createVisitOnDone(status, user, model) {
  if (status === 'done') {
    const us = await model.findByIdAndUpdate(user, { $inc: { visits: 1 } }, { new: true });
    return status;
  }
  return status;
};
