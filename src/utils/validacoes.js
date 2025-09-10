import { listaAnimais, listaBrinquedos } from "../listas";

function verificarDuplicado(lista) {
    const unicos = new Set()

    for (const elemento of lista) {
        if (!unicos.has(elemento)) {
            unicos.add(elemento)
        }
    }

    if (unicos.size == lista.length)
        return false
    return true
}

export function validarAnimais(animais) {
    const listaAnimaisUpper = Object.keys(listaAnimais)
        .map(a => a.toUpperCase())

    const animaisExistem = animais.every(a => listaAnimaisUpper.includes(a))

    const estaDuplicado = verificarDuplicado(animais)

    if (!estaDuplicado && animaisExistem)
        return true
    return false
}

export function validarBrinquedos(brinquedos) {

    const brinquedosExistem = brinquedos.every(b => listaBrinquedos.has(b))

    const estaDuplicado = verificarDuplicado(brinquedos)

    if (!estaDuplicado && brinquedosExistem)
        return true
    return false
}

export function validarSeApto(brinquedosDaPessoa, animal, adotadosPessoa) {
    const brinquedosDoAnimal = listaAnimais[animal].brinquedos;
    const tipoDoAnimal = listaAnimais[animal].tipo;

    const brinquedosEmComum = brinquedosDaPessoa.filter(b => brinquedosDoAnimal.includes(b));

    const mesmoTamanho = brinquedosEmComum.length === brinquedosDoAnimal.length;

    const limiteAdocoes = adotadosPessoa.length < 3;

    if (tipoDoAnimal === "gato") {
        const gatosJaAdotados = adotadosPessoa.filter(a => listaAnimais[a].tipo === "gato");

        for (const gatoAdotado of gatosJaAdotados) {
            const brinquedosGatoAdotado = listaAnimais[gatoAdotado].brinquedos;
            const temConflito = brinquedosDoAnimal.some(b => brinquedosGatoAdotado.includes(b));

            if (temConflito) {
                return false;  
            }
        }
    }

    if (animal === "Loco") {
        return mesmoTamanho && limiteAdocoes;
    }

    const mesmaOrdem = brinquedosDoAnimal.every((b, i) => b === brinquedosEmComum[i]);

    return mesmoTamanho && mesmaOrdem && limiteAdocoes;
}