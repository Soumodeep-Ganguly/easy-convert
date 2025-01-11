const weight = {
    "carat": {
        carat: 1,
        point: 5,
        gram: 0.2,
        kilogram: 0.0002,
        megagram: 0.0000002,
        milligram: 200,
        ounce: 0.00705479,
        pound: 0.000440924,
        stone: 0.000031429,
        ton: 0.000000220462, // 1 carat = 0.000000220462 ton (metric ton)
    },
    "point": {
        carat: 0.2,
        point: 1,
        gram: 0.04,
        kilogram: 0.00004,
        megagram: 0.00000004,
        milligram: 40,
        ounce: 0.001411,
        pound: 0.000088185,
        stone: 0.0000062857,
        ton: 0.000000044092, // 1 point = 0.000000044092 ton (metric ton)
    },
    "gram": {
        carat: 5,
        point: 25,
        gram: 1,
        kilogram: 0.001,
        megagram: 0.000001,
        milligram: 1000,
        ounce: 0.03527396,
        pound: 0.002204623,
        stone: 0.000157473,
        ton: 0.00000110231, // 1 gram = 0.00000110231 ton (metric ton)
    },
    "kilogram": {
        carat: 5000,
        point: 50000,
        gram: 1000,
        kilogram: 1,
        megagram: 0.001,
        milligram: 1000000,
        ounce: 35.27396,
        pound: 2.204623,
        stone: 0.157473,
        ton: 0.00110231, // 1 kilogram = 0.00110231 ton (metric ton)
    },
    "megagram": {
        carat: 5000000,
        point: 50000000,
        gram: 1000000,
        kilogram: 1000,
        megagram: 1,
        milligram: 1000000000,
        ounce: 35273.96,
        pound: 2204.623,
        stone: 1574.73,
        ton: 1.10231, // 1 megagram = 1.10231 ton (metric ton)
    },
    "milligram": {
        carat: 0.005,
        point: 0.05,
        gram: 0.001,
        kilogram: 0.000001,
        megagram: 0.000000001,
        milligram: 1,
        ounce: 0.00003527396,
        pound: 0.00000220462,
        stone: 0.000000157473,
        ton: 0.00000000000110231, // 1 milligram = 0.00000000000110231 ton (metric ton)
    },
    "ounce": {
        carat: 141.7476,
        point: 1417.476,
        gram: 28.3495,
        kilogram: 0.0283495,
        megagram: 0.0000283495,
        milligram: 28349.5,
        ounce: 1,
        pound: 0.0625,
        stone: 0.00446429,
        ton: 0.00003527396, // 1 ounce = 0.00003527396 ton (metric ton)
    },
    "pound": {
        carat: 2267.96,
        point: 22679.6,
        gram: 453.592,
        kilogram: 0.453592,
        megagram: 0.000453592,
        milligram: 453592,
        ounce: 16,
        pound: 1,
        stone: 0.0714286,
        ton: 0.0005, // 1 pound = 0.0005 ton (metric ton)
    },
    "stone": {
        carat: 31780.4,
        point: 317804,
        gram: 6350.29,
        kilogram: 6.35029,
        megagram: 0.00635029,
        milligram: 6350290,
        ounce: 224,
        pound: 14,
        stone: 1,
        ton: 0.007, // 1 stone = 0.007 ton (metric ton)
    },
    "ton": {
        carat: 5000000, // conversion for carat is correct
        point: 5000000, // conversion for point is correct
        gram: 1000000, // 1 ton = 1000000 grams
        kilogram: 1000, // 1 ton = 1000 kilograms
        megagram: 1, // 1 ton = 1 megagram
        milligram: 1000000000, // 1 ton = 1000000000 milligrams
        ounce: 35273.96, // 1 ton = 35273.96 ounces
        pound: 2204.623, // 1 ton = 2204.623 pounds
        stone: 157.473, // 1 ton = 157.473 stones
        ton: 1, // 1 ton = 1 ton
    }
};
export default weight;
