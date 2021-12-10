import { makeObservable, observable } from 'mobx';
import { useStores } from '../../useStores';

import {
   loadData
} from './actions';

export default class EnvStore {
    env = null
    observed = {};
    message = '';
    constructor () {
        makeObservable(this, {
            observed: observable,
        });
    }

    loadData = loadData;
}

export function useEnvStore () {
    const { envStore } = useStores();
    return envStore;
}
