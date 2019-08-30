const Controller = require('egg').Controller;

class PermissionController extends Controller {
  async list() {
    // this.ctx.body = [await this.ctx.service.permission.list()];
    this.ctx.body = [{
      'project:list': true,
      'project:detail': true,
      'project:create': true,
      'project:update': true,
      'project:delete': true,
    }];
  }

  async create() {
    const {
      name,
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
      const createdRow = await this.ctx.service.permission.create({
        name,
      });

      this.ctx.body = [createdRow];
    } catch (error) {
      this.ctx.body = error;
    }
  }

  async updateById() {
    const {
      name,
    } = this.ctx.request.body;
    const { id } = this.ctx.params;

    try {
      const updatedRow = await this.ctx.service.permission.update({
        id,
        name,
      });

      this.ctx.body = [updatedRow];
    } catch (error) {
      this.ctx.body = error;
    }
  }

  async deleteById() {
    const { id } = this.ctx.params;

    try {
      const deletedRow = await this.ctx.service.permission.deleteById({
        id,
      });

      this.ctx.body = [deletedRow];
    } catch (error) {
      this.ctx.body = error;
    }
  }
}

module.exports = PermissionController;
