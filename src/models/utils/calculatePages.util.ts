// eslint-disable-next-line max-len
export const calculatePages = (
  totalCount: string | number,
  itemsPerPage: number,
) => Math.ceil(Number(totalCount) / itemsPerPage);
