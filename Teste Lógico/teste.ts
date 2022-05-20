// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function ex1(n1, l1) {
  const lettersArray1 = [];
  for (i = 1; i <= n1; i++) {
    lettersArray1.push(l1);
  }

  console.log(lettersArray1);
  return lettersArray1;
}

ex1(3, "a");

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function ex2() {
  const n2 = [1, 2, 3, 4];
  const na2 = [];

  for (i = n2.length - 1; i >= 0; i--) {
    na2.push(n2[i]);
  }

  console.log(na2);
  return na2;
}

ex2();

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function ex3() {
  const n3 = [1, 2, "", undefined];
  const na3 = n3.filter((number) => number >= 1);

  console.log(na3);
  return na3;
}

ex3();

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}

function ex4() {
  const arrayOfArrays4 = [
    ["c", 2],
    ["d", 4],
  ];

  const na4 = Object.fromEntries(arrayOfArrays4);

  console.log(na4);
  return na4;
}

ex4();

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada.
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function ex5(array5, number1, number2) {
  const na5 = array5.filter(
    (newarray) => newarray !== number1 && newarray !== number2
  );

  console.log(na5);
  return na5;
}

ex5([5, 4, 3, 2, 5], 5, 3);

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

function ex6(array6) {
  const na6 = [];

  for (unique of array6) {
    if (na6.indexOf(unique) === -1) {
      na6.push(unique);
    }
  }

  console.log(na6);
  return na6;
}

ex6([1, 2, 3, 3, 2, 4, 5, 4, 7, 3]);

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function ex7(array1, array2) {
  const r7 =
    array1.length == array2.length &&
    array1.every(function (value, index) {
      return value === array2[index];
    });

  console.log(r7);
  return r7;
}

ex7([1, 2, 3, 4], [1, 2, 3, 4]);

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function ex8() {
  const a8 = [1, 2, [3], [4, 5]];
  const na8 = a8.reduce((acc, curVal) => {
    return acc.concat(curVal)
}, []);

  console.log(na8);
  return na8;
}

ex8();

// // 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// // Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function ex9(array9, number9) {
  const na9 = new Array(Math.ceil(array9.length / number9))
    .fill()
    .map((_) => array9.splice(0, number9));

  console.log(na9);
  return na9;
}

ex9([1, 2, 3, 4, 5], 2);

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function ex10(array1, array2) {
  const na10 = array1.filter((number) => array2.includes(number));

  console.log(na10);
  return na10;
}

ex10([6, 8], [8, 9]);
