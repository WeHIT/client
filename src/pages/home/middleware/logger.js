const logger = store => next => action => {
  console.log('PRE_STATE:');
  console.log(store.getState());

  console.log('ACTION:');
  console.log(action);

  let result = next(action);

  console.log('NEXT_STATE:')
  console.log(store.getState())

  console.log('----')
  return result;
};

export default logger;
