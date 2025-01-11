import conversionRates from "./conversion-rates";
export function convert(value, from) {
    let fromCategory = conversionRates[from];
    if (!fromCategory) {
        throw new Error(`Unsupported unit: ${from}`);
    }
    return {
        to: (to) => {
            // Check if the 'to' unit exists in the 'fromRates'
            const conversionTo = fromCategory[to]; // Cast to correct key type
            if (conversionTo === undefined) {
                throw new Error(`Conversion from ${String(from)} to ${String(to)} is not supported.`);
            }
            // Ensure conversionRate is a number before multiplying
            return value * conversionTo;
        },
    };
}
