module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Project = app.model.define('project', {
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

  Project.associate = () => {
    const {
      Project: ProjectModel,
      Language,
      ProjLang,
      Namespace,
      ProjNs,
    } = app.model;

    ProjectModel.belongsToMany(Language, {
      through: ProjLang,
      as: 'langList',
      foreignKey: 'projId',
      otherKey: 'langId',
    });
    ProjectModel.belongsToMany(Namespace, {
      through: ProjNs,
      as: 'nsList',
      foreignKey: 'projId',
      otherKey: 'nsId',
    });
  };

  return Project;
};
