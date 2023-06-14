//recebe dois números e retorna um objeto com duas propriedades
//a primeira é a soma dos dois números
//a segunda é a multiplicação dos dois números

export const pratica3 = (num1: number, num2: number): {soma: number, mult: number} | null => {
    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return null
    }

    return{
        soma: num1 + num2,
        mult: num1 * num2
    }
    
}