import React, { useState, useEffect} from 'react';

export interface IUrl {
    url: string;
    method: 'POST' | 'GET' | 'DELETE' | 'PUT';
    body?: FormData | string;
}

export interface IRequest {
    repuestId: string;
    urls: IUrl | IUrl[];
}

export interface IRequestError {
    error: boolean;
    message: string;
}

const ERROR_INITIAL_STATE: IRequestError = {
    error: null,
    message: null
}

export const useFetch =(endpoint: IUrl[] | IUrl, requestId: string, credentials?: boolean, errorMessage?: string) => {
    const [data, setData] = useState(null)
    const [loading, setLoading]= useState(false);
    const [error, setError] = useState<IRequestError>(ERROR_INITIAL_STATE)
    const [controller, setController] = useState<AbortController>(null);
    const [status, setStatus] = useState<number>(null);
    const message = errorMessage || 'API not working'

    useEffect(() => {
        const abortController = new AbortController();
        if((!Array.isArray(endpoint) && endpoint) || (Array.isArray(endpoint) && endpoint.length)) {
            setController(abortController);
            setLoading(true);
            try {
                if(Array.isArray(endpoint)) {
                    Promise.all(endpoint.map((url: IUrl) => fetch(url.url, {
                        signal: abortController.signal,
                        method: url.method,
                        body: url.method !== 'GET' ? url.body : null,
                        credentials: credentials ? 'include' : 'omit'
                    }).then((response) => {
                        setStatus(response.status);
                        return response.json();
                    }))).then((data) => {
                        setData({id: requestId, data: data})
                        setLoading(false);
                        setError(ERROR_INITIAL_STATE)
                    }).catch((error: any) => {
                        if(error.name === 'AbortError') console.log('AbortError.')
                        else {
                            setError({
                                error: error,
                                message: 'Errrrrooorr'
                            })}
                    }).finally(() => setLoading(false))
                } else {
                    const {url: urlEnpoint, method, body} = endpoint;
                    urlEnpoint && 
                    fetch(urlEnpoint, {
                        signal: abortController.signal,
                        method: method,
                        body: method !== 'GET' ? body : null,
                        headers:
                            typeof body === 'string' ? {'Content-Type': 'application/json'} : {},
                        credentials: credentials ? 'include' : 'omit'
                    }).then((response) => {
                        setStatus(response.status);
                        return response.json();
                    }).then((data) => {
                        setData({id: requestId, data: data})
                        setLoading(false);
                        setError(ERROR_INITIAL_STATE)
                    }).catch((error: any) => {
                        if(error.name === 'AbortError') console.log('AbortError.')
                        else if (error.name === 'SyntaxError') console.error(error)
                        else 
                            setError({
                                error: error,
                                message: 'Errrrrooorr'
                            })
                        
                    }).finally(() => setLoading(false))
                }
            } catch (error) {
                console.log('Error:', error)
            }
        } 

        return () => abortController.abort();
    }, [endpoint])

    const handleCancelController = () => {
        if(controller) {
            controller.abort();
            setError({
                error: true,
                message: 'Error: Request cancelled'
            })
        }
    }

    return {data, loading, error, status, handleCancelController}
}