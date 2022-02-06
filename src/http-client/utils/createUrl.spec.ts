import { createUrl } from './createUrl.util';

describe('createUrl', () => {
  const BASE = 'BASE';
  const PATH = 'PATH';
  it('creates url from base and path', () => {
    const url = createUrl(BASE, PATH);

    expect(url).toEqual(`${BASE}/${PATH}`);
  });

  it('creates url from multiple entries', () => {
    const url = createUrl(BASE, PATH, PATH);

    expect(url).toEqual(`${BASE}/${PATH}/${PATH}`);
  });
});
