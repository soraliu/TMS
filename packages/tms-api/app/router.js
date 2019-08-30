module.exports = app => {
  const { router, controller, config } = app;
  const { router: { prefix } } = config;

  router.get(`${prefix}/project`, controller.project.list);
  router.post(`${prefix}/project`, controller.project.create);
  router.put(`${prefix}/project/:id`, controller.project.updateById);
  router.delete(`${prefix}/project/:id`, controller.project.deleteById);

  router.get(`${prefix}/namespace`, controller.namespace.list);
  router.post(`${prefix}/namespace`, controller.namespace.create);
  router.put(`${prefix}/namespace/:id`, controller.namespace.updateById);
  router.delete(`${prefix}/namespace/:id`, controller.namespace.deleteById);

  router.get(`${prefix}/language`, controller.language.list);
  router.post(`${prefix}/language`, controller.language.create);
  router.put(`${prefix}/language/:id`, controller.language.updateById);
  router.delete(`${prefix}/language/:id`, controller.language.deleteById);

  router.get(`${prefix}/permission`, controller.permission.list);
  router.post(`${prefix}/permission`, controller.permission.create);
  router.put(`${prefix}/permission/:id`, controller.permission.updateById);
  router.delete(`${prefix}/permission/:id`, controller.permission.deleteById);
};
