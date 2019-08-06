import { state } from './state';
import { reducers } from './reducers';
import { effects } from './effects';

// este es el modelo del que habla la documentacion de rematch
const model = {
    state,
    reducers,
    effects,
};

export default model;
