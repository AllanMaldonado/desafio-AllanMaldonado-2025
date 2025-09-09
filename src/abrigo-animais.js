import { validarAnimais, validarBrinquedos, validarSeApto } from './utils/validacoes'
import { normalize, capitalize } from './utils/strings'


class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const brinquedosP1 = normalize(brinquedosPessoa1)
    const brinquedosP2 = normalize(brinquedosPessoa2)
    const animais = normalize(ordemAnimais)

    let adotadosPessoa1 = []
    let adotadosPessoa2 = []
    let resultado = []

    if (!validarAnimais(animais))
      return { erro: 'Animal inválido' }

    if (!validarBrinquedos(brinquedosP1) || !validarBrinquedos(brinquedosP2))
      return { erro: 'Brinquedo inválido' }

    for (let animal of animais) {
      animal = capitalize(animal)
      const pessoa1EstaApta = validarSeApto(brinquedosP1, animal, adotadosPessoa1)
      const pessoa2EstaApta = validarSeApto(brinquedosP2, animal, adotadosPessoa2)

      if (pessoa1EstaApta && pessoa2EstaApta) {
        resultado.push(`${animal} - abrigo`)
      } else
        if (pessoa1EstaApta) {
          resultado.push(`${animal} - pessoa 1`)
          adotadosPessoa1.push(animal)
        } else
          if (pessoa2EstaApta) {
            resultado.push(`${animal} - pessoa 2`)
            adotadosPessoa2.push(animal)
          } else {
            resultado.push(`${animal} - abrigo`)
          }
    }

    console.log(resultado.sort());

    return { lista: resultado.sort() }
  }
}

export { AbrigoAnimais as AbrigoAnimais };
