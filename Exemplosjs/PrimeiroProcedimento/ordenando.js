// Função para trocar os valores de duas posições de um vetor
function swap(array, pos1, pos2) {
  let temp = array[pos1];
  array[pos1] = array[pos2];
  array[pos2] = temp;
}

// Função para embaralhar os elementos de um vetor
function shuffle(array, numSwaps) {
  for (let i = 0; i < numSwaps; i++) {
    let randomIndex1 = Math.floor(Math.random() * array.length);
    let randomIndex2 = Math.floor(Math.random() * array.length);
    swap(array, randomIndex1, randomIndex2);
  }
}

// Função para ordenar um vetor de inteiros com Bubble Sort
function bubble_sort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

// Função para ordenar um vetor de inteiros com Selection Sort
function selection_sort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(array, i, min);
    }
  }
}

// Função para ordenar um vetor de inteiros com Quick Sort
function quick_sort(array, left, right) {
  if (left < right) {
    let pivot = partition(array, left, right);
    quick_sort(array, left, pivot - 1);
    quick_sort(array, pivot + 1, right);
  }
}

// Função de particionamento para Quick Sort
function partition(array, left, right) {
  let pivot = array[right];
  let i = left - 1;
  for (let j = left; j < right; j++) {
    if (array[j] < pivot) {
      i++;
      swap(array, i, j);
    }
  }
  swap(array, i + 1, right);
  return i + 1;
}

// Função para adicionar um valor à lista de valores
function add() {
  let valorInput = document.getElementById("valor").value;
  let valoresLista = document.getElementById("valores");
  let node = document.createElement("li");
  let textNode = document.createTextNode(valorInput);
  node.appendChild(textNode);
  valoresLista.appendChild(node);
}

// Função para ordenar os valores da lista
function ordenar() {
  let valoresLista = document.getElementById("valores");
  let algoritmoSelecionado = document.getElementById("algoritmo").value;
  let valoresArray = Array.from(valoresLista.children).map((item) =>
    parseInt(item.innerHTML)
  );
  switch (algoritmoSelecionado) {
    case "bubble":
      bubble_sort(valoresArray);
      break;
    case "selection":
      selection_sort(valoresArray);
      break;
    case "quick":
      quick_sort(valoresArray, 0, valoresArray.length - 1);
      break;
  }
  valoresLista.innerHTML = valoresArray
    .map((item) => `<li>${item}</li>`)
    .reduce((acc, curr) => acc + curr);
}

// Função para embaralhar os valores da lista
function misturar() {
  let valoresLista = document.getElementById("valores");
  let valoresArray = Array.from(valoresLista.children).map((item) =>
    parseInt(item.innerHTML)
  );
  shuffle(valoresArray, valoresArray.length * 2);
  valoresLista.innerHTML = valoresArray
    .map((item) => `<li>${item}</li>`)
    .reduce((acc, curr) => acc + curr);
}
