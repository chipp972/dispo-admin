// @flow
// import io from 'socket.io-client';
// import { authAPI as auth, dataAPI as data } from 'dispo-api';
// import env from './env';

import type { SocketIO } from 'socket.io-client';
import type { Reducer } from 'redux';
import { combineReducers } from 'redux';

import { authenticationReducer } from './authentication/authentication.reducer';

// const initialState = {
//   socket: io(env.api.websocketUrl),
// };

export type DispoAdminState = {
  socket: SocketIO,
  authentication: {
    email?: string,
    code?: string,
    loggedIn: boolean
  }
};

export const dispoAdmin: Reducer = combineReducers({
  authentication: authenticationReducer
});
