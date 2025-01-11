import area from "./area";
import computerStorage from "./computer-storage";
import length from "./length";
import weight from "./weight";

const alias = {
    ...length,
    ...weight,
    ...area,
    ...computerStorage
}

export default alias;