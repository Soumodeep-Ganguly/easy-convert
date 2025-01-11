const weight = {
    gram: { gram: 1, kilogram: 0.001, milligram: 1000, carats: 5, ounce: 0.03527396, pound: 0.00220462 },
    kilogram: { kilogram: 1, gram: 1000, milligram: 1e6, pound: 2.20462, ounce: 35.27396, stone: 0.157473 },
    pound: { pound: 1, kilogram: 0.453592, gram: 453.592, ounce: 16, stone: 0.0714286 },
    ounce: { ounce: 1, gram: 28.3495, kilogram: 0.0283495, pound: 0.0625 },
    // Add more conversions as needed
};
export default weight;
