

---

#  Abrigo de Animais – Desafio Técnico JavaScript

## Visão Geral

Este projeto é a solução para um desafio técnico em **JavaScript**, que simula um sistema de adoção em um abrigo de animais.
As decisões de adoção são baseadas nos **brinquedos favoritos** de cada animal e em **regras específicas de negócio**, trazendo um problema de lógica próximo a cenários reais.


---

## Regras de Adoção

* **Compatibilidade** → O animal só pode ser adotado se a pessoa apresentar todos os brinquedos favoritos **na ordem correta** (outros brinquedos podem estar no meio).
* **Empate** → Se duas pessoas satisfazem as condições, o animal permanece no abrigo.
* **Limite** → Cada pessoa pode adotar no máximo **3 animais**.
* **Gatos** → Não compartilham brinquedos com outros animais da mesma pessoa.
* **Loco (jabuti)** → Só exige ordem correta se estiver sozinho; caso tenha companhia, qualquer ordem é válida.

---

## Animais e Brinquedos Favoritos

| Animal | Tipo   | Brinquedos Favoritos |
| ------ | ------ | -------------------- |
| Rex    | Cão    | RATO, BOLA           |
| Mimi   | Gato   | BOLA, LASER          |
| Fofo   | Gato   | BOLA, RATO, LASER    |
| Zero   | Gato   | RATO, BOLA           |
| Bola   | Cão    | CAIXA, NOVELO        |
| Bebe   | Cão    | LASER, RATO, BOLA    |
| Loco   | Jabuti | SKATE, RATO          |

---

## Exemplo de Uso

```javascript
import AbrigoAnimais from './src/abrigo-animais.js';

const abrigo = new AbrigoAnimais();

const resultado = abrigo.encontraPessoas(
  'RATO,BOLA',      // brinquedos da pessoa 1
  'LASER,CAIXA',    // brinquedos da pessoa 2
  'Rex,Mimi'        // ordem de análise dos animais
);

console.log(resultado);
// Saída esperada: { lista: ['Mimi - abrigo', 'Rex - pessoa 1'] }
```

---

## Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/abrigo-animais.git
   cd abrigo-animais
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Execute os testes automatizados:

   ```bash
   npm test
   ```

---


## Referências

* [MDN Web Docs – JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

---

