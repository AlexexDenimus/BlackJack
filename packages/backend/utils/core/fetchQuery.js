module.exports = function fetchQuery(query) {
  const filter = query.filter ? JSON.parse(query.filter) : {};
  const sort = query.sort ? query.sort : 'id';
  const order = query.order ? query.order : 'DESC';
  const sortType = [sort, order];
  return {
    filter,
    sortType,
  };
};
