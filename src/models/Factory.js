import FacturaModel from "./DAO/model.js";
import facturasModelFs from "./DAO/modelFs.js";

class Factory {
    static create(persistence) {
        switch (persistence) {
            case "memory":
                console.log("memory persistence");
                return new FacturaModel();
            case "fs":
                console.log("file system persistence");
                return new facturasModelFs();

            default:
                console.log("default persistence");
                return new FacturaModel();
        }
    }
}
export default Factory;