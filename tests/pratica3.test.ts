import { pratica3 } from "../src/pratica3"


describe("Teste da prática 3", () => {
    test("Deve retornar nulo se os parâmetros forem diferentes de number", () => {
        const result = pratica3("3" as any, "10" as any)

        expect(result).toBe(null)
    })

    test("Deve receber dois números e retornar um objeto contendo a soma e a multiplicação desses números", () => {
        const result = pratica3(2, 10)
        const result2 = pratica3(3, 7)

        expect(result).toEqual({soma:12, mult: 20})
        expect(result2).toEqual({soma: 10, mult: 21})
    })

    
})