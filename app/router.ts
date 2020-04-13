import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // api
  router.post('/api/info', controller.api.info.index);
  router.post('/api/auth/verify', controller.api.auth.verify);

  // home
  router.get('*', controller.home.index);
};
