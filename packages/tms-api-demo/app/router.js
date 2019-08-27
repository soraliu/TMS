module.exports = app => {
  const { router, controller, config } = app;
  const { router: { prefix } } = config;

  router.get(`${prefix}/project`, controller.project.list);
  router.post(`${prefix}/project`, controller.project.create);
  router.put(`${prefix}/project/:id`, controller.project.update);
  router.delete(`${prefix}/project/:id`, controller.project.delete);
};
