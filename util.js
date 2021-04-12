function generateDefaultError(request, status) {
    return {
        timestamp: new Date().toISOString(),
        path: request.path,
        status,
        method: request.method
    }
}


module.exports = {
    generateDefaultError
}