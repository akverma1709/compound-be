const { Joi } = require('celebrate');

exports.listValidation = {
    query: Joi.object().keys({
        page: Joi.number().required(),
        limit: Joi.number().required()
    }).required()
}

exports.updateValidation = {
    query: Joi.object().keys({
        id: Joi.string().required()
    }).required(),
    body: Joi.object({
        CompoundName: Joi.string().required(),
        CompounrDescription: Joi.string().required(),
        strImageSource: Joi.string().required(),
        strImageAttribution: Joi.string().optional().allow(null,""),
    }).required()
}

exports.detailValidation = {
    query: Joi.object().keys({
        id: Joi.string().required()
    }).required()
}
