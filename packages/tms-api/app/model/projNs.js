module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const ProjNs = app.model.define('proj_ns', {
    projId: INTEGER,
    nsId: INTEGER,
  });

  return ProjNs;
};
