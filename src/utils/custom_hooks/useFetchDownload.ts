export const fetchDownloadAPI = (url: string, fileName: string) => {
    const abortController = new AbortController();
    fetch(url, {
        signal: abortController.signal,
        method: 'GET'
    }).then(response => response.blob())
    .then((data) => {
        const domStringURL = window.URL.createObjectURL(data);
        const hiddenLink = document.createElement('a');

        hiddenLink.href = domStringURL;
        hiddenLink.download = fileName;
        hiddenLink.click();
        window.URL.revokeObjectURL(domStringURL);
        document.removeChild(hiddenLink)
    })
    .catch((error: any) => {
    if(error.name === 'AbortError') console.log('AbortError.')
    else if (error.name === 'SyntaxError') console.error(error)
    else 
        return {
            error: error,
            message: 'Errrrrooorr'
        }
    })
}