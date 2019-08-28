const Service = require('egg').Service;

class ProjectService extends Service {
  async list() {
    return await this.ctx.model.Project.findAll({
      where: { deleted: 0 },
      include: [{
        model: this.ctx.model.Language,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      }, {
        model: this.ctx.model.Namespace,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        },
      }],
    });
  }

  async create({
    name,
    desc,
    nsList,
    langList,
  }) {
    const ctx = this.ctx;

    try {
      return await ctx.model.transaction(async () => {
        const proj = (await ctx.model.Project.create({ name, desc })).toJSON();

        const { id: projId } = proj;
        await this._createAssociations({ projId, nsList, langList });

        return { ...proj, nsList, langList };
      });
    } catch (err) {
      throw ctx.helper.sqlErrHandler(err);
    }
  }

  async update({
    id,
    name,
    desc,
    nsList,
    langList,
  }) {
    const ctx = this.ctx;

    try {
      await this._isExist({ id });

      const result = await ctx.model.transaction(async () => {
        await ctx.model.Project.update({ name, desc }, { where: { id } });
        await this._destroyAssociations({ projId: id });
        await this._createAssociations({ projId: id, nsList, langList });
      });

      return result;
    } catch (err) {
      throw ctx.helper.sqlErrHandler(err);
    }
  }

  async deleteById({
    id,
  }) {
    const ctx = this.ctx;

    try {
      await this._isExist({ id });

      await ctx.model.Project.update({ deleted: 1 }, { where: { id } });
    } catch (err) {
      let handledErr;

      throw handledErr || err;
    }
  }

  async _isExist({
    id,
  }) {
    const ctx = this.ctx;

    const project = await ctx.model.Project.findByPk(id);
    if (!project) {
      throw {
        code: 100101,
        placeholder: ['id', id],
      };
    }
  }

  async _createAssociations({
    projId,
    nsList,
    langList,
  }) {
    const ctx = this.ctx;

    if (nsList.length < 1) {
      throw {
        code: 100002,
        placeholder: ['nsList'],
      };
    }
    if (langList.length < 1) {
      throw {
        code: 100002,
        placeholder: ['langList'],
      };
    }

    await ctx.model.transaction(async () => {
      await ctx.model.ProjNs.bulkCreate(nsList.map(nsId => ({ projId, nsId })));
      await ctx.model.ProjLang.bulkCreate(langList.map(langId => ({ projId, langId })));
    });
  }

  async _destroyAssociations({
    projId,
  }) {
    const ctx = this.ctx;

    await ctx.model.transaction(async () => {
      await ctx.model.ProjNs.destroy({ where: { projId } });
      await ctx.model.ProjLang.destroy({ where: { projId } });
    });
  }
}

module.exports = ProjectService;
