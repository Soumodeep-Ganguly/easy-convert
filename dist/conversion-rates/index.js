import area from "./area";
import computerStorage from "./computer-storage";
import length from "./length";
import weight from "./weight";
const conversionRates = {
    ...length,
    ...weight,
    ...area,
    ...computerStorage
};
export default conversionRates;
