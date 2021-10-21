import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../redux/actions';

const Home = () => {
  const [list, setList] = useState({ elements: [] });
  const dispatch = useDispatch();
  const reduxList = useSelector((state) => state.list);
  console.log(list);
  useEffect(() => {
    if (!list.status) dispatch(getList());
    setList(reduxList);
  }, [list.status, dispatch, reduxList]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>address</th>
            <th>city</th>
            <th>region</th>
            <th>country</th>
            <th>birthday</th>
          </tr>
        </thead>
        <tbody>
          {list.elements.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.addres}</td>
              <td>{person.city}</td>
              <td>{person.region}</td>
              <td>{person.country}</td>
              <td>{person.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;