import axios from 'axios';

const EndpointSources = {
    remote: () => ({
         sample: getBaseURL() + '/sample',
    }),

    local: () => ({
        sample: 'http://localhost:3000/sample',
    }),
};

const baseURL = {
    local: 'http://localhost:3000/',
    prod: 'http://localhost:3000/',
    stage: 'http://localhost:3000/',
    dev: 'http://localhost:3000/',
};

function getBaseURL () {
    if (baseURL[window.env]) {
        return baseURL[window.env];
    }
    return baseURL.dev;
}

export function endpoints () {
    if (window.env !== undefined && window.env !== 'local') {
       return EndpointSources.remote();
    }
    return EndpointSources.local();
}

export function post (endpoint, body, options = { token: '', traceId: '', headers: {}, returnOnError: false }) {
    const {
        token,
        headers,
        traceId,
    } = options;

    // check whether token is expired or not.. wait for it...

    async function execRequest (resolve, reject) {
      

        const reqHeaders = {
            authorization: 'Bearer ' + token,
            'x-trace-id': traceId,
            ...headers,
        };

        axios
        .post(
            endpoint,
            body,
            { headers: reqHeaders }
        )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            resolve(error);
        });
    }

    return new Promise(execRequest);
};

export function get (endpoint, options = { token: '', traceId: '', headers: {} }) {
    const {
        token,
        headers,
        traceId,
    } = options;

    async function execRequest (resolve, reject) {
        const reqHeaders = {
            authorization: 'Bearer ' + token,
            'x-trace-id': traceId,
            ...headers,

        };

        axios
        .get(
            endpoint,
            { headers: reqHeaders }
        )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            resolve(error.response);
        });
    }
    return new Promise(execRequest);
};

export function upload (endpoint, formData, options = { token: '', traceId: '', headers: {} }) {
    const {
        token,
        headers,
        traceId,
    } = options;

    async function execRequest (resolve, reject) {
        const reqHeaders = {
            'content-type': 'multipart/form-data',
            authorization: 'Bearer ' + token,
            'x-trace-id': traceId,
            ...headers,
        };

        axios
        .post(
            endpoint,
            formData,
            { headers: reqHeaders }
        )
        .then(function (response) {
          
        })
        .catch(function (error) {
           
        });
    }
    return new Promise(execRequest);
};

export function postGQL (endpoint, query, options = { token: '', traceId: '', headers: {}, returnOnError: false }) {
    const {
        token,
        headers,
        traceId,
    } = options;

    async function execRequest (resolve, reject) {
        const reqHeaders = {
            authorization: 'Bearer ' + token,
            'x-trace-id': traceId,
            ...headers,
        };

        axios
        .post(
            endpoint,
            query,
            { headers: reqHeaders }
        )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            if (options.returnOnError) {
                resolve(error.response);
            }
        });
    }

    return new Promise(execRequest);
};

export function put (endpoint, body, options = { token: '', traceId: '', headers: {} }) {
    const {
        token,
        headers,
        traceId,
    } = options;
   
    async function execRequest (resolve, reject) {
        const reqHeaders = {
            authorization: 'Bearer ' + token,
            'x-trace-id': traceId,
            ...headers,
        };

        axios
        .put(
            endpoint,
            body,
            { headers: reqHeaders }
        )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
           resolve(error.response);
        });
    }
 
    return new Promise(execRequest);
};

export function deleteCall (endpoint, options = { token: '', traceId: '', headers: {} }) {
    const {
        token,
        headers,
        traceId,
    } = options;
    
    async function execRequest (resolve, reject) {
        const reqHeaders = {
            authorization: 'Bearer ' + token,
            'x-trace-id': traceId,
            ...headers,
        };

        axios
        .delete(
            endpoint,
            { headers: reqHeaders }
        )
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            resolve(error.response);
        });
    }
   
    return new Promise(execRequest);
};
