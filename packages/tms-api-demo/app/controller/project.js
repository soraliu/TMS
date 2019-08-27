const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async list() {
    this.ctx.body = new Date().now();
  }

  async create() {}

  async update() {}

  async delete() {}
}

module.exports = ProjectController;
