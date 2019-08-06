import { init } from '@rematch/core';
import createRematchPersist from '@rematch/persist';
import storage from 'redux-persist/es/storage'; // default: localStorage if web, AsyncStorage if react-native
import { createLogger } from 'redux-logger';
import models from '../models';

const persistPlugin = createRematchPersist({
    key: 'root',
    storage,
    timeout: 10000,
    debug: true //to get useful logging
});

const middleware = [];
// eslint-disable-next-line no-undef
if (__DEV__) {
    middleware.push(createLogger());
}

const store = init({
    models,
    plugins: [
        persistPlugin
    ],
    redux: {
        middlewares: middleware
    },
});

export default store;
