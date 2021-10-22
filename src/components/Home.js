import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getList } from '../redux/actions';

const Home = () => {
  const [list, setList] = useState({ elements: [] });
  const [colOne, setColOne] = useState('name');
  const [colTwo, setColTwo] = useState('address');
  const [colThree, setColThree] = useState('city');
  const [colFour, setColFour] = useState('region');
  const [colFive, setColFive] = useState('country');
  const [colSix, setColSix] = useState('birthday');
  let draggedNum = 0;
  let droppedNum = 0;
  let draggedCol = [];
  let droppedCol = [];
  const dispatch = useDispatch();
  const reduxList = useSelector((state) => state.list);
  useEffect(() => {
    if (!list.status) dispatch(getList());
    setList(reduxList);
  }, [list.status, dispatch, reduxList]);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };
  const takeValues = (num) => {
    const firstCells = document.querySelectorAll(`td:nth-child(${num})`);
    const cellValues = [];
    firstCells.forEach((singleCell) => {
      cellValues.push(singleCell.innerText);
    });
    return cellValues;
  };
  const takeName = (num) => {
    switch (num) {
      case 1: return colOne;
      case 2: return colTwo;
      case 3: return colThree;
      case 4: return colFour;
      case 5: return colFive;
      case 6: return colSix;
      default: return 'Error!';
    }
  };
  const drag = (num) => (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
    draggedNum = num;
    const arr = takeValues(num);
    arr.unshift(takeName(num));
    draggedCol = arr;
  };
  const changeValues = (num1, num2) => {
    const firstCells = document.querySelectorAll(`td:nth-child(${num1})`);
    firstCells.forEach((singleCell, index) => {
      singleCell.innerText = droppedCol[index + 1];
    });
    const secondCells = document.querySelectorAll(`td:nth-child(${num2})`);
    secondCells.forEach((singleCell2, index) => {
      singleCell2.innerText = draggedCol[index + 1];
    });
  };
  const editColumn = (receiver, given) => {
    changeValues(draggedNum, droppedNum);
    switch (receiver) {
      case 1: setColOne(droppedCol[0]); break;
      case 2: setColTwo(droppedCol[0]); break;
      case 3: setColThree(droppedCol[0]); break;
      case 4: setColFour(droppedCol[0]); break;
      case 5: setColFive(droppedCol[0]); break;
      case 6: setColSix(droppedCol[0]); break;
      default: return 'Error!';
    }
    switch (given) {
      case 1: return setColOne(draggedCol[0]);
      case 2: return setColTwo(draggedCol[0]);
      case 3: return setColThree(draggedCol[0]);
      case 4: return setColFour(draggedCol[0]);
      case 5: return setColFive(draggedCol[0]);
      case 6: return setColSix(draggedCol[0]);
      default: return 'Error!';
    }
  };

  const changeColumns = () => {
    editColumn(draggedNum, droppedNum, 1);
  };
  const drop = (num) => (ev) => {
    ev.preventDefault();
    droppedNum = num;
    const arr = takeValues(num);
    arr.unshift(takeName(num));
    droppedCol = arr;
    changeColumns();
  };

  return (
    <div className="container">
      <h1 className="title">Hello there!</h1>
      <h2 className="subtitle">A table with drag and drop columns</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th draggable="true" onDragStart={drag(1)} onDrop={drop(1)} onDragOver={allowDrop}>{colOne}</th>
            <th draggable="true" onDragStart={drag(2)} onDrop={drop(2)} onDragOver={allowDrop}>{colTwo}</th>
            <th draggable="true" onDragStart={drag(3)} onDrop={drop(3)} onDragOver={allowDrop}>{colThree}</th>
            <th draggable="true" onDragStart={drag(4)} onDrop={drop(4)} onDragOver={allowDrop}>{colFour}</th>
            <th draggable="true" onDragStart={drag(5)} onDrop={drop(5)} onDragOver={allowDrop}>{colFive}</th>
            <th draggable="true" onDragStart={drag(6)} onDrop={drop(6)} onDragOver={allowDrop}>{colSix}</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th>{colOne}</th>
            <th>{colTwo}</th>
            <th>{colThree}</th>
            <th>{colFour}</th>
            <th>{colFive}</th>
            <th>{colSix}</th>
          </tr>
        </tfoot>
        <tbody>
          {list.elements.map((person) => (
            <tr key={person.name}>
              <td>{person.name}</td>
              <td>{person.address}</td>
              <td>{person.city}</td>
              <td>{person.region}</td>
              <td>{person.country}</td>
              <td>{person.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
