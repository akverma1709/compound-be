exports.SUCCESSCODE        = 200;
exports.ERRORCODE          = 400;
exports.DUPLICATEERRORCODE = 409
exports.REGERRORCODE       = 204;
exports.SESSIONCODE        = 401;
exports.EXCEPTIONCODE      = 500;
exports.ERRORMESSAGE       = "We are currently facing some problem. Please Try again after some time";

response = {
    statusCode    : this.SUCCESSCODE,
    message       : '',
    data          : null,
    paginationData: null, // {total: number, limit: number, pageNo: number}
    errors        : null,
    error         :""
};

NullResponseValue = () => {
    response = {
        statusCode    : this.SUCCESSCODE,
        message       : '',
        data          : null,
        paginationData: null,
        errors        : null,
        error         :""
    };
    return true;
};

exports.SendResponse = (res, status) => {
    res.status(200).send(response);
    NullResponseValue();
    return
};


