import fs from "fs"

class facturasModelFs {
    constructor(){
        this.path = "facturas.txt";
    }
    getFacturas = async () => {
    const allFacturas = await fs.promises.readFile(this.path, "utf8");
        return JSON.parse(allFacturas);
    }
    postFactura = async (factura) => {
        const facturas = await this.getFacturas();
        factura.id = facturas.length <= 0 ? 1 : facturas[facturas.length - 1].id + 1;
        facturas.push(factura);
        await fs.promises.writeFile(this.path, JSON.stringify(facturas), "utf-8");
        return factura;
    }
    getFacturasPorTipo = async (tipo) => {
        const facturas = await this.getFacturas();
        return facturas.filter(factura => factura.tipo === tipo);
    }
    getFacturasPorEstado = async (estado) => {
        const facturas = await this.getFacturas();
        return facturas.filter(factura => factura.estado.toLowerCase() === estado.toLowerCase());
    }
}
export default facturasModelFs;