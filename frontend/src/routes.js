const apiPath = '/api/v1';

const routes = {
  loginPath: () => [apiPath, 'login'].join('/'),
  signupPath: () => [apiPath, 'signup'].join('/'),
  dataPath: () => [apiPath, 'data'].join('/'),

  home: '/',
  login: '/login',
  signup: '/signup',
  error: '*',
};

export default routes;
