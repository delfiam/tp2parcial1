import FacturasService from "../services/service.js";

class FacturasController {
    constructor() {
        this.facturasService = new FacturasService();
    }

    getFacturas = async (req, res) => {
        try {
            const facturas = await this.facturasService.getFacturas();
            res.status(200).json(facturas);
        } catch (error) {
            res.status(500).json({ error: "Error consiguiendo las facturas", errormsj: error.message });
        }
    };

    postFactura = async (req, res) => {
        try {
            const factura = req.body;
           /* if (!factura || !factura.tipo || !factura.monto || !factura.numero || !factura.estado) {
                return res.status(400).json({ error: "Faltan campos al insertar" });
            }*/
            const facturaCreada = await this.facturasService.postFactura(factura);
            res.status(201).json(facturaCreada);
        } catch (error) {
            res.status(500).json({ error: "Error creando la factura", errormsj: error.message });
        }
    };

    getFacturasPorTipo = async (req, res) => {
        try {
            const { tipo } = req.params;
            const facturasPorTipo = await this.facturasService.getFacturasPorTipo(tipo);
            res.status(200).json(facturasPorTipo);
        } catch (error) {
            res.status(500).json({ error: "Error consiguiendo las facturas por tipo", errormsj: error.message });
        }
    };
    getFacturasPorEstado = async (req, res) => {
        try {
            const { estado } = req.params;
            const facturasPorEstado = await this.facturasService.getFacturasPorEstado(estado);
            res.status(200).json(facturasPorEstado);
        } catch (error) {
            res.status(500).json({ error: "Error consiguiendo las facturas por estado", errormsj: error.message });
        }
    }
}
export default FacturasController;