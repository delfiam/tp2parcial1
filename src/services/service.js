import Factory from "../models/Factory.js";
import validation from "../utils/validation.js";
class FacturasService {
    constructor() {
        this.facturasModel = Factory.create(process.env.PERSISTENCE);
    }

    getFacturas = async () => {
        return await this.facturasModel.getFacturas();
    };

    postFactura = async (factura) => {
        const validarFactura = validation.schema.validate(factura);
        if (validarFactura.error) {
            return "Error: " + validarFactura.error;
        } else {
        return await this.facturasModel.postFactura(factura);
        }
    };
    getFacturasPorTipo = async (tipo) => {
        return await this.facturasModel.getFacturasPorTipo(tipo);
    };
    getFacturasPorEstado = async (estado) => {
        return await this.facturasModel.getFacturasPorEstado(estado);
    };
}
export default FacturasService;