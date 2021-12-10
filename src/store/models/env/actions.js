import { v4 as uuid } from 'uuid';
import {
    apiSample,
} from './api';

export async function loadData () {
    const res = await apiSample();
    this.message = res;
    this.observed.message = uuid();
}
