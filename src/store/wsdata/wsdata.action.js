// @flow
import io from 'socket.io-client';
// import { authAPI as auth, dataAPI as data } from 'dispo-api';
import env from '../../env';

// connect to the websocket server
io(env.api.websocketUrl);

// TODO: create actions to emit events (ask for companies' status)
// TODO: create actions to respond to events from the websocket server
