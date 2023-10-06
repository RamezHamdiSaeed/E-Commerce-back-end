export const paginationFunction = ({ page = 1, size = 5 } = {}) => {
  if (page < 1) page = 1;
  if (size < 1) size = 5;

  let skip = (parseInt(page) - 1) * parseInt(size);
  let limit = parseInt(size);

  return { skip, limit };
};
