/**
 * React Native App
 * Everthing starts from the Entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import store from 'app/store/configureStore';
import Navigator from 'app/navigation';
import AppStyles from 'app/config/styles';

export default class Entrypoint extends Component {
    render() {
        const persistor = getPersistor();

        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <Navigator />
                </PersistGate>
            </Provider>
        );
    }

}
