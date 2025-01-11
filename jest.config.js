module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    roots: ["<rootDir>/__tests__"],
    transform: {
        "^.+\\.ts?$": "ts-jest",
    },
    moduleFileExtensions: ["ts", "js"],
};