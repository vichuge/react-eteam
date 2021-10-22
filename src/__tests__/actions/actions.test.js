import { all } from '../../redux/actions';

describe('Actions', () => {
  it('return all function', () => {
    expect(all('allTest')).toEqual({ payload: 'allTest', type: 'ALL_ELEMENTS' });
  });
});
