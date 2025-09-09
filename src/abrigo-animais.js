import { validarAnimais, validarBrinquedos } from './utils/validacoes'
import { listaAnimais } from './listas'

let adotadosPessoa1 = []
let adotadosPessoa2 = []

const normalize = string => string.split(',').map(a => a.trim().toUpperCase());

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()

function verificarSeEstaApto(brinquedosDaPessoa, animal) {
  const brinquedosDoAnimal = listaAnimais[animal].brinquedos

  const brinquedosEmComum = brinquedosDaPessoa.filter(b => brinquedosDoAnimal.includes(b))

  const mesmoTamanho = brinquedosEmComum.length === brinquedosDoAnimal.length;

  const mesmaOrdem = brinquedosDoAnimal.every((b, i) => b === brinquedosEmComum[i]);

  return mesmoTamanho && mesmaOrdem;
}


class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const brinquedosP1 = normalize(brinquedosPessoa1)
    const brinquedosP2 = normalize(brinquedosPessoa2)
    const animais = normalize(ordemAnimais)

    let resultado = []

    if (!validarAnimais(animais))
      return { erro: 'Animal inválido' }

    if (!validarBrinquedos(brinquedosP1) || !validarBrinquedos(brinquedosP2))
      return { erro: 'Brinquedo inválido' }

    for (let animal of animais) {
      animal = capitalize(animal)
      const pessoa1EstaApta = verificarSeEstaApto(brinquedosP1, animal)
      const pessoa2EstaApta = verificarSeEstaApto(brinquedosP2, animal)

      if (pessoa1EstaApta && pessoa2EstaApta) {
        resultado.push(`${animal} - abrigo`)
      } else if (pessoa1EstaApta) {
        resultado.push(`${animal} - pessoa 1`)
      } else if (pessoa2EstaApta) {
        resultado.push(`${animal} - pessoa 2`)
      }else{
         resultado.push(`${animal} - abrigo`)
      }
    }

    console.log(resultado.sort());
    
    return { lista: resultado.sort() }
  }
}

export { AbrigoAnimais as AbrigoAnimais };
