const Service = require('egg').Service;

class NamespaceService extends Service {
  async list() {
    const ctx = this.ctx;

    return await ctx.model.Namespace.findAll({
      attributes: ['id', 'name', 'desc'],
      where: { deleted: 0 },
    });
  }

  async create({
    name,
    desc,
  }) {
    const ctx = this.ctx;

    try {
      return await ctx.model.Namespace.create({
        name,
        desc,
      });
    } catch (err) {
      throw ctx.helper.sqlErrHandler(err);
    }
  }

  async update({
    id,
    name,
    desc,
  }) {
    const ctx = this.ctx;

    try {
      await this._isExist({ id });
      await ctx.model.Namespace.update({
        name,
        desc,
      }, { where: { id } });
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

      await ctx.model.Namespace.update({ deleted: 1 }, { where: { id } });
    } catch (err) {
      throw ctx.helper.sqlErrHandler(err);
    }
  }

  async _isExist({
    id,
  }) {
    const ctx = this.ctx;

    const finded = await ctx.model.Namespace.findByPk(id);
    if (!finded) {
      throw {
        code: 100101,
        placeholder: ['id', id],
      };
    }
  }
}

module.exports = NamespaceService;
