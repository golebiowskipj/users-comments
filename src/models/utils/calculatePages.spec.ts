import { calculatePages } from './calculatePages.util';

describe('calculatePages', () => {
  const cases = [
    ['1', 10, 1],
    [1, 10, 1],
    [500, 10, 50],
  ];
  it.each(cases)(
    'totalCount %p, itemsPerPage %p, returns %p',
    (totalCount, itemsPerPage, expectedResult) => {
      const result = calculatePages(totalCount, itemsPerPage as number);

      expect(result).toEqual(expectedResult);
    },
  );
});
