declare const conversionRates: {
    byte: {
        byte: number;
        kilobyte: number;
        megabyte: number;
        gigabyte: number;
        terabyte: number;
    };
    kilobyte: {
        kilobyte: number;
        byte: number;
        megabyte: number;
        gigabyte: number;
    };
    megabyte: {
        megabyte: number;
        byte: number;
        kilobyte: number;
        gigabyte: number;
    };
    gigabyte: {
        gigabyte: number;
        byte: number;
        kilobyte: number;
        megabyte: number;
        terabyte: number;
    };
    terabyte: {
        terabyte: number;
        byte: number;
        kilobyte: number;
        megabyte: number;
        gigabyte: number;
    };
    squareMeter: {
        squareMeter: number;
        squareKilometer: number;
        squareFeet: number;
        squareYard: number;
        acre: number;
        hectare: number;
    };
    squareKilometer: {
        squareKilometer: number;
        squareMeter: number;
        acre: number;
        hectare: number;
        squareMile: number;
    };
    acre: {
        acre: number;
        squareMeter: number;
        hectare: number;
        squareKilometer: number;
        squareMile: number;
    };
    gram: {
        gram: number;
        kilogram: number;
        milligram: number;
        carats: number;
        ounce: number;
        pound: number;
    };
    kilogram: {
        kilogram: number;
        gram: number;
        milligram: number;
        pound: number;
        ounce: number;
        stone: number;
    };
    pound: {
        pound: number;
        kilogram: number;
        gram: number;
        ounce: number;
        stone: number;
    };
    ounce: {
        ounce: number;
        gram: number;
        kilogram: number;
        pound: number;
    };
    mil: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    inch: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    foot: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    yard: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    mile: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    capefoot: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    rod: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    angstrom: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    nanometer: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    micron: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    millimeter: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    centimeter: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    meter: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    kilometer: {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    "light-year": {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    "light-day": {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    "light-hour": {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    "light-minute": {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
    "light-second": {
        mil: number;
        inch: number;
        foot: number;
        yard: number;
        mile: number;
        capefoot: number;
        rod: number;
        angstrom: number;
        nanometer: number;
        micron: number;
        millimeter: number;
        centimeter: number;
        meter: number;
        kilometer: number;
        "light-year": number;
        "light-day": number;
        "light-hour": number;
        "light-minute": number;
        "light-second": number;
    };
};
export default conversionRates;
