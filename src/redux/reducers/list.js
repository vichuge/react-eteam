import { ALL_ELEMENTS } from '../actionTypes';

const initialState = {
  elements: [],
  status: false,
};

/* const createTable = (table) => {
  const e1 = [];
  const e2 = [];
  const e3 = [];
  const e4 = [];
  const e5 = [];
  const e6 = [];
  console.log(table);
  table.forEach((person) => (
    e1.push(person.name)
    e2.push(person.address)
    e3.push(person.city)
    e4.push(person.region)
    e5.push(person.country)
    e6.push(person.birthday)
  ));
  return elements;
}; */

const list = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ELEMENTS:
      return {
        elements: action.payload,
        status: true,
      };
    default:
      return state;
  }
};

export default list;
