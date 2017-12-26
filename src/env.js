// @flow
export default {
  nodeEnv: process.env.REACT_APP_NODE_ENV || 'production',
  isAuthenticationActivated: process.env.REACT_APP_IS_AUTHENTICATION_ACTIVATED
    ? process.env.REACT_APP_IS_AUTHENTICATION_ACTIVATED === '1'
    : true,
  api: {
    url: process.env.REACT_APP_API_URL || '/',
    websocketUrl: process.env.REACT_APP_WS_URL || '/'
  },
  auth0: {
    url: process.env.REACT_APP_AUTH0_URL || '/',
    clientId: process.env.REACT_APP_AUTH0_CLIENT_ID || '',
    domain: process.env.REACT_APP_AUTH0_DOMAIN || ''
  },
  ui: {
    mobileMaxWidth: process.env.REACT_APP_MOBILE_MAX_WIDTH || 560
  }
};
