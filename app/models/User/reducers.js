/* eslint-disable import/prefer-default-export */
// handle state changes with pure functions
import update from 'immutability-helper';

export const reducers = {

    setLoader(state, newData) {
        return update(state, {
            isLoginLoading: { $set: newData },
        });
    },

    setSession: (state, newData) => update(state, {
        session: { $set: newData },
    }),

};
