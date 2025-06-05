import Joi from "joi";

const schema = Joi.object({
    numero: Joi.number().integer().positive().required(),
    tipo: Joi.string().valid("A", "B", "C").required(),
    monto: Joi.number().positive().required(),
    estado: Joi.string().valid("pendiente de pago", "pagado", "próximo a vencer").required()
});

export default {
    schema
};