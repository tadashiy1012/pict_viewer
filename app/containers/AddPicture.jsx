import React from 'react';
import { connect } from 'react-redux';
import { addPicture } from '../actions';

const remote = window.require('electron').remote;

let AddPicture = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        remote.require('./openDir')((arg) => {
          arg.map((data) => {
            dispatch(addPicture(data));
          });
        });
      }}>
        <button type="submit">Open Directory</button>
      </form>
    </div>
  );
};

AddPicture = connect()(AddPicture);

export default AddPicture;