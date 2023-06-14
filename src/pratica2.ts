export const pratica2 = (n: number): boolean | null => {
    if (typeof n !== "number") {
        return null
    }

    //testar se o tipo de n é um number

    if (!Number.isInteger(n)) {
        return null
    }

    //testar se o n é um número inteiro

    return n % 2 == 0

    //testar se o número retorna true para par
    //testar se o número retorna false para ímpar
}