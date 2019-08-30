export default (params, getGql) => {
  const parameters = Array.prototype.join.call(params, " ");
  return getGql(parameters);
};
