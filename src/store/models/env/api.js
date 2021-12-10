/*
import {
    post,
    endpoints,
} from '../../api';
*/

export function apiSample () {
    return new Promise((resolve) => {
        resolve('Hello this is the show.');
    });

    /*
    return post(
        endpoints().sample,
        data,
        {
            traceId,
            token,
        }
    );
    */
}