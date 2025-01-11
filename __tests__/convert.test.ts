import { convert } from "../src/convert";

describe("Unit Converter", () => {
  it("Converts meter to kilometer", () => {
    const result = convert(1000, "meter").to("kilometer");
    expect(result).toBe(1);
  });

  it("Converts kilometer to meter", () => {
    const result = convert(1, "kilometer").to("meter");
    expect(result).toBe(1000);
  });

  it("Converts gram to kilogram", () => {
    const result = convert(1000, "gram").to("kilogram");
    expect(result).toBe(1);
  });

  it("Converts g to kg test alias", () => {
    const result = convert(1000, "g").to("kg");
    expect(result).toBe(1);
  });

  it("Converts kilogram to gram", () => {
    const result = convert(1, "kilogram").to("gram");
    expect(result).toBe(1000);
  });

  it("Converts square-meter to square-kilometer", () => {
    const result = convert(1000000, "square-meter").to("square-kilometer");
    expect(result).toBe(1);
  });

  it("Converts square-kilometer to square-meter", () => {
    const result = convert(1, "square-kilometer").to("square-meter");
    expect(result).toBe(1000000);
  });

  it("Converts acre to square-meter", () => {
    const result = convert(1, "acre").to("square-meter", 2);
    expect(result).toBe(4046.86);
  });

  it("Converts square-meter to acre", () => {
    const result = convert(4046.86, "square-meter").to("acre");
    expect(result).toBe(1);
  });

  it("Converts carat to gram", () => {
    const result = convert(1, "carat").to("gram", 1);
    expect(result).toBe(0.2);
  });

  it("Converts kilogram to ton", () => {
    const result = convert(1000, "kilogram").to("ton");
    expect(result).toBe(1);
  });

  it("Converts ton to kilogram", () => {
    const result = convert(1, "ton").to("kilogram");
    expect(result).toBe(1000);
  });

  it("Converts byte to kilobyte", () => {
    const result = convert(1024, "byte").to("kilobyte");
    expect(result).toBe(1);
  });

  it("Converts kilobyte to megabyte", () => {
    const result = convert(1024, "kilobyte").to("megabyte");
    expect(result).toBe(1);
  });

  it("Converts megabyte to gigabyte", () => {
    const result = convert(1024, "megabyte").to("gigabyte");
    expect(result).toBe(1);
  });

  it("Converts gigabyte to terabyte", () => {
    const result = convert(1024, "gigabyte").to("terabyte");
    expect(result).toBe(1);
  });

  it("Converts terabyte to gigabyte", () => {
    const result = convert(1, "terabyte").to("gigabyte");
    expect(result).toBe(1024);
  });

  it("Throws an error for unsupported units", () => {
    expect(() => convert(1, "liters" as any).to("gram")).toThrow(
      "Unsupported unit: liters"
    );
  });

  it("Throws an error for invalid conversions", () => {
    expect(() => convert(1, "meter" as any).to("gram" as any)).toThrow(
      "Conversion from meter to gram is not supported."
    );
  });
});