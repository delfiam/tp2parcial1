class FacturaModel {
    constructor() {
        this.facturas = [{
            "id": 1, "numero": 10, "tipo": "A", "monto": 1405200,
            "estado": "pendiente de pago"
        }
        ];
    }

    getFacturas = async () => {
        return this.facturas;
    };

    postFactura = async (newFactura) => {
        newFactura.id = this.facturas.length ? this.facturas[this.facturas.length - 1].id + 1 : 1;
        this.facturas.push(newFactura);
        return newFactura;
    }

    getFacturasPorTipo = async (tipo) => {
        return this.facturas.filter(factura => factura.tipo === tipo);
    }

    getFacturasPorEstado = async (estado) => {
        return this.facturas.filter(factura => factura.estado.toLowerCase() === estado.toLowerCase());
    }
}
export default FacturaModel;