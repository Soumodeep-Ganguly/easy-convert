"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = convert;
const aliases_1 = __importDefault(require("./aliases"));
const conversion_rates_1 = __importDefault(require("./conversion-rates"));
function convert(value, from) {
    const fromNormalizedKey = aliases_1.default[from] || from;
    let fromCategory = conversion_rates_1.default[fromNormalizedKey];
    if (!fromCategory) {
        throw new Error(`Unsupported unit: ${from}`);
    }
    return {
        to: (to, decimal = 0) => {
            const toNormalizedKey = aliases_1.default[to] || to;
            // Check if the 'to' unit exists in the 'fromRates'
            const conversionTo = fromCategory[toNormalizedKey]; // Cast to correct key type
            if (conversionTo === undefined) {
                throw new Error(`Conversion from ${String(from)} to ${String(to)} is not supported.`);
            }
            // Ensure conversionRate is a number before multiplying
            return parseFloat((value * conversionTo).toFixed(decimal));
        },
    };
}
