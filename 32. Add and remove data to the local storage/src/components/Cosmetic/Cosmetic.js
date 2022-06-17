import React from 'react';
import { addToDb, removeFromDb as deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
  const { _id, name, phone, gender } = props.cosmetic;
  const purchaseHandle = (id) => {
    addToDb(id);
  }
  const removeHandle = id => {
    deleteFromDb(id);
  }
  return (
    <div>
      <h2>{name}</h2>
      <h4>Gerder: {gender}</h4>
      <p>Number: {phone}</p>
      <button onClick={() => { purchaseHandle(_id) }}>purchase</button>
      <button onClick={() => { removeHandle(_id) }}>Remove</button>
    </div>
  );
};

export default Cosmetic;