import FacturaModel from "./DAO/model.js";

class Factory {
    static create(persistence) {
        switch (persistence) {
            case "memory":
                console.log("memory persistence");
                return new FacturaModel();

            default:
                console.log("default persistence");
                return new FacturaModel();
        }
    }
}
export default Factory;