import Factory from "../models/Factory.js";
class FacturasService {
    constructor() {
        this.facturasModel = Factory.create(process.env.PERSISTENCE);
    }

    getFacturas = async () => {
        return await this.facturasModel.getFacturas();
    };

    postFactura = async (newFactura) => {
        return await this.facturasModel.postFactura(newFactura);
    };
    getFacturasPorTipo = async (tipo) => {
        return await this.facturasModel.getFacturasPorTipo(tipo);
    };
    getFacturasPorEstado = async (estado) => {
        return await this.facturasModel.getFacturasPorEstado(estado);
    };
}
export default FacturasService;