import React from 'react';
import { connect } from 'react-redux';
import { addPicture } from '../actions';

let AddPicture = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        dispatch(addPicture(input.value));
      }}>
        <input ref={node => { input = node }} />
        <button type="submit">Add Picture</button>
      </form>
    </div>
  );
};

AddPicture = connect()(AddPicture);

export default AddPicture;