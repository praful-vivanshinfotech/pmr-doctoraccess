export const isNullable = (val) => {
  return val === "" || val === undefined || val === null ? true : false;
};
