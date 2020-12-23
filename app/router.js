'use strict';
// 这是egg的路由配置
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.get('/blockchain', '/api/chain', controller.blockchain.info);
  router.get('*', controller.main.index);
};
