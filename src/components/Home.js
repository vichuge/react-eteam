import React/* , { useState, useEffect } */ from 'react';
import { useSelector/* , useDispatch */ } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { getList } from '../redux/actions';

const Home = () => {
  const list = useSelector((state) => state.list);
  console.log(list);
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
          {list.elements.map((pokemon, index) => (
            <tr key={index}>
              <td>{pokemon.name}</td>
              <td>{pokemon.addres}</td>
              <td>{pokemon.city}</td>
              <td>{pokemon.region}</td>
              <td>{pokemon.country}</td>
              <td>{pokemon.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;