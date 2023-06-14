import { fixacao } from "../src/fixacao";

describe("Teste de fixação", () => {
    test("Deve retornar um array de strings onde cada item é uma letra da palavra original", () => {
        const result = fixacao("dev")

        expect(result).toEqual(["d","e","v"])
    })
})