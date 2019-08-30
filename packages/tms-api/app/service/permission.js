const Service = require('egg').Service;

class PermissionService extends Service {
  async list() {
    const ctx = this.ctx;

    return await ctx.model.Permission.findAll({
      attributes: ['id', 'name'],
    });
  }

  async create({
    name,
  }) {
    const ctx = this.ctx;

    try {
      return await ctx.model.Permission.create({
        name,
      });
    } catch (err) {
      throw ctx.helper.sqlErrHandler(err);
    }
  }

  async update({
    id,
    name,
  }) {
    const ctx = this.ctx;

    try {
      await this._isExist({ id });
      await ctx.model.Permission.update({
        name,
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

      await ctx.model.Permission.update({ deleted: 1 }, { where: { id } });
    } catch (err) {
      throw ctx.helper.sqlErrHandler(err);
    }
  }

  async _isExist({
    id,
  }) {
    const ctx = this.ctx;

    const finded = await ctx.model.Permission.findByPk(id);
    if (!finded) {
      throw {
        code: 100101,
        placeholder: ['id', id],
      };
    }
  }
}

module.exports = PermissionService;
