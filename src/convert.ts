import alias from "./aliases";
import conversionRates from "./conversion-rates";

export function convert(value: number, from: string) {
    const fromNormalizedKey = alias[from as keyof typeof alias] || from
    let fromCategory = conversionRates[fromNormalizedKey as keyof typeof conversionRates];

    if(!fromCategory) {
        throw new Error(`Unsupported unit: ${from}`);
    }

    return {
        to: (to: string, decimal: number = 0) => {
            const toNormalizedKey = alias[to as keyof typeof alias] || to

            // Check if the 'to' unit exists in the 'fromRates'
            const conversionTo = fromCategory[toNormalizedKey as keyof typeof fromCategory]; // Cast to correct key type
            if (conversionTo === undefined) {
                throw new Error(`Conversion from ${String(from)} to ${String(to)} is not supported.`);
            }
        
            // Ensure conversionRate is a number before multiplying
            return parseFloat((value * conversionTo).toFixed(decimal))
        },
    };
}