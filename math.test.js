const math = require("./math");

describe("Operações aritméticas", () => {
    // test ou it - especifica novo teste
    test("Soma de dois números", () => {
        const result = math.add(3,5);
        // expect - especifica resultado esperado
        expect(result).toEqual(8);
    });

    test("Subtração de dois números", () => {
        const result = math.subtract(5,3);
        expect(result).toEqual(2);
    });

    it("Divisão de dois números", () => {
        const result = math.division(9,3);
        expect(result).toEqual(3);
    });

    it("Divisão por zero", () => {
        try {
            math.division(9,0);
        } catch(error) {
            expect(error.message).toBe("Divisão ilegal por zero!");
        }
    });

    it("Multiplicação de dois números", () => {
        const result = math.multiply(7, 6);
        expect(result).toBe(42);
    });
});