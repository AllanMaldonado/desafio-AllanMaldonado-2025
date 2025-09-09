import { validarAnimais, validarBrinquedos } from './utils/validacoes'

class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    if (!validarAnimais(ordemAnimais))
      return { erro: 'Animal inválido' }
    
    if (!validarBrinquedos(brinquedosPessoa1) || !validarBrinquedos(brinquedosPessoa2))
      return { erro: 'Brinquedo inválido' }
 
    
  }
}

export { AbrigoAnimais as AbrigoAnimais };
