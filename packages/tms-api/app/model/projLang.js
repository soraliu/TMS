module.exports = app => {
  const { INTEGER } = app.Sequelize;

  const ProjLang = app.model.define('proj_lang', {
    projId: INTEGER,
    langId: INTEGER,
  });

  return ProjLang;
};
