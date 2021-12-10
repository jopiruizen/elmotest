import EnvStore from './models/env';
import { v4 as uuid } from 'uuid';

const envStore = new EnvStore();
envStore.traceId = uuid();
window.env = process.env.REACT_APP_ENV_VAR;
envStore.envType = window.env;

const store = {
    envStore,
};

export default store;
