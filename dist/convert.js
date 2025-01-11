import alias from "./aliases";
import conversionRates from "./conversion-rates";
export function convert(value, from) {
    const fromNormalizedKey = alias[from] || from;
    let fromCategory = conversionRates[fromNormalizedKey];
    if (!fromCategory) {
        throw new Error(`Unsupported unit: ${from}`);
    }
    return {
        to: (to, decimal = 0) => {
            const toNormalizedKey = alias[to] || to;
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
