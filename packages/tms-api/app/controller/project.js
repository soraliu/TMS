const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async list() {
    this.ctx.body = [await this.ctx.service.project.list()];
  }

  async create() {
    const {
      name,
      desc,
      nsList,
      langList,
    } = this.ctx.request.body;

    if (!name || !nsList || !langList) {
      this.ctx.body = {
        code: 100000,
        placeholder: [
          (!name && 'name') || (!nsList && 'nsList') || (!langList && 'langList'),
        ],
      };
      return;
    }

    try {
      const createdProject = await this.ctx.service.project.create({
        name,
        desc,
        nsList,
        langList,
      });

      this.ctx.body = [createdProject];
    } catch (error) {
      this.ctx.body = error;
    }
  }

  async updateById() {
    const {
      name,
      desc,
      nsList,
      langList,
    } = this.ctx.request.body;
    const { id } = this.ctx.params;

    try {
      const updatedProject = await this.ctx.service.project.update({
        id,
        name,
        desc,
        nsList,
        langList,
      });

      this.ctx.body = [updatedProject];
    } catch (error) {
      this.ctx.body = error;
    }
  }

  async deleteById() {
    const { id } = this.ctx.params;

    try {
      const data = await this.ctx.service.project.deleteById({
        id,
      });

      this.ctx.body = [data];
    } catch (error) {
      this.ctx.body = error;
    }
  }
}

module.exports = ProjectController;
