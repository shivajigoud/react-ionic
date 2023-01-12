import React from 'react';

const utils = () => {
  function* createId(starter) {
    let i = starter || 1;
    while (true) {
      yield i++;
    }
  }
  const newID = createId();
  const getNewID = () => {
    return newID.next().value;
  };
  return {
    getNewID,
  };
};
export default utils();
