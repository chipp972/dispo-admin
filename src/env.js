// @flow
import runtimeEnv from '@mars/heroku-js-runtime-env';

const env = runtimeEnv();

export default {
  nodeEnv: env.REACT_APP_NODE_ENV || 'production',
  isAuthenticationActivated: env.REACT_APP_IS_AUTHENTICATION_ACTIVATED
    ? env.REACT_APP_IS_AUTHENTICATION_ACTIVATED === '1'
    : true,
  api: {
    url: env.REACT_APP_API_URL || '/',
    websocketUrl: env.REACT_APP_WS_URL || '/'
  },
  auth0: {
    url: env.REACT_APP_AUTH0_URL || '/',
    clientId: env.REACT_APP_AUTH0_CLIENT_ID || '',
    domain: env.REACT_APP_AUTH0_DOMAIN || ''
  },
  ui: {
    mobileMaxWidth: env.REACT_APP_MOBILE_MAX_WIDTH || 560
  }
};
