const computerStorage = {
    byte: { byte: 1, kilobyte: 0.001, megabyte: 1e-6, gigabyte: 1e-9, terabyte: 1e-12 },
    kilobyte: { kilobyte: 1, byte: 1000, megabyte: 0.001, gigabyte: 1e-6 },
    megabyte: { megabyte: 1, byte: 1e6, kilobyte: 1000, gigabyte: 0.001 },
    gigabyte: { gigabyte: 1, byte: 1e9, kilobyte: 1e6, megabyte: 1000, terabyte: 0.001 },
    terabyte: { terabyte: 1, byte: 1e12, kilobyte: 1e9, megabyte: 1e6, gigabyte: 1000 },
    // Add more conversions as needed
};
export default computerStorage;
