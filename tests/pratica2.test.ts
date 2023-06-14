import { pratica2 } from "../src/pratica2";

  //testar se o tipo de n é um number
  //testar se o n é um número inteiro
  //testar se o número retorna true para par
  //testar se o número retorna false para ímpar

describe("Teste da prática 2", () => {
    test("Deve retornar null se o parâmetro for do tipo diferente de number", () => {
        const result = pratica2("abc" as any)

        expect(result).toBe(null)
    } )
    
    test("Deve retornar nulo se o parâmetro não for um inteiro", () => {
        const result = pratica2(11.6)

        expect(result).toBeNull()
    })

    test("Deve retornar true se n for um número par", () => {
        const result = pratica2(36)

        expect(result).toBe(true)
    })

    test("Deve retornar false se n for um número ímpar", () => {
        const result = pratica2(23)

        expect(result).toBe(false)
    })
})







