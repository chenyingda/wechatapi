'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  	const { router, controller } = app;

  	router.get('/login/login', controller.login.login)

  	router.post('/template/sendtemplate', controller.template.sendtemplate)
};
