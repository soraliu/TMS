exports.now = () => new Date().getTime();

exports.sqlErrHandler = err => {
  let handledErr;

  if (err.name === 'SequelizeUniqueConstraintError') {
    const [{ path, value }] = err.errors;
    handledErr = {
      code: 100100,
      placeholder: [path, value],
    };
  }

  return handledErr || err;
};
