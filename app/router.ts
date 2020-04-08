import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  // api
  router.post('/api/init', controller.api.info.init);
  router.post('/api/info', controller.api.info.index);

  // home
  router.get('*', controller.home.index);
};
