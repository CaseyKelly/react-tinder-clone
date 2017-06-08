export function selectJam(jam) {
  // selectJam is an ActionCreator, it needs
  // to return an action, an object with a
  // type property.
  return {
    type: 'JAM_SELECTED',
    payload: jam
  };
}