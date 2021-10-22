import { ALL_ELEMENTS } from '../../redux/actionTypes';
import list from '../../redux/reducers/list';

describe('list data', () => {
  it('return list ALL_ELEMENTS', () => {
    const f = list(null, {
      type: ALL_ELEMENTS,
      payload: 'formTest',
    });
    expect(f.status).toBe(true);
  });
});