const Controller = require('egg').Controller;

class LanguageController extends Controller {
  async list() {
    this.ctx.body = [await this.ctx.service.language.list()];
  }

  async create() {
    const {
      name,
      desc,
    } = this.ctx.request.body;

    if (!name) {
      this.ctx.body = {
        code: 100000,
        placeholder: [
          'name',
        ],
      };
      return;
    }

    try {
      const createdRow = await this.ctx.service.language.create({
        name,
        desc,
      });

      this.ctx.body = [createdRow];
    } catch (error) {
      this.ctx.body = error;
    }
  }

  async updateById() {
    const {
      name,
      desc,
    } = this.ctx.request.body;
    const { id } = this.ctx.params;

    try {
      const updatedRow = await this.ctx.service.language.update({
        id,
        name,
        desc,
      });

      this.ctx.body = [updatedRow];
    } catch (error) {
      this.ctx.body = error;
    }
  }

  async deleteById() {
    const { id } = this.ctx.params;

    try {
      const deletedRow = await this.ctx.service.language.deleteById({
        id,
      });

      this.ctx.body = [deletedRow];
    } catch (error) {
      this.ctx.body = error;
    }
  }
}

module.exports = LanguageController;
