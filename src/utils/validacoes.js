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

export function validarAnimais(animaisDaEntrada) {
    const animais = animaisDaEntrada
        .split(',')
        .map(a => a.trim().toUpperCase())

    const listaAnimaisUpper = Object.keys(listaAnimais)
        .map(a => a.toUpperCase())

    const animaisExistem = animais.every(a => listaAnimaisUpper.includes(a))

    const estaDuplicado = verificarDuplicado(animais)

    if (!estaDuplicado && animaisExistem)
        return true
    return false
}

export function validarBrinquedos(brinquedosDaPessoa) {
    const brinquedos = brinquedosDaPessoa
        .split(",")
        .map(b => b.trim().toUpperCase())

    const brinquedosExistem = brinquedos.every(b => listaBrinquedos.has(b))

    const estaDuplicado = verificarDuplicado(brinquedos)

    if (!estaDuplicado && brinquedosExistem)
        return true
    return false
}
