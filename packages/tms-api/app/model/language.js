module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Language = app.model.define('language', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      unique: true,
    },
    desc: STRING,
    createdAt: DATE,
    deleted: INTEGER,
  });

  return Language;
};
