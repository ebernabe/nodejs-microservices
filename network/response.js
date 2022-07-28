exports.success = function (req, res, message, status) {
    res.status(status).send({
        error: false,
        status: status,
        body: message,
    });
}

exports.error = function (req, res, message, status) {
    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server Error';
    console.log(message);
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    });
}