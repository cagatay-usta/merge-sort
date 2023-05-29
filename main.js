// fibonacci
function fibonacci(n) {
  if (n < 2) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibArray(n) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    answer.push(fibonacci(i));
  }
  return answer;
}

console.log(fibArray(8));

// merge sort
function mergeSort(array) {
  if (array.length < 2) return array;
  const half = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, half));
  const right = mergeSort(array.slice(half));
  const merged = [];
  while (left.length > 0 && right.length > 0) {
  (left[0] < right[0]) ? merged.push(left.shift()) : merged.push(right.shift());
  }
  return (left.length === 0) ? [...merged, ...right] : [...merged, ...left];
}

// create random arrays with random length to test
function createTest() {
  const number = Math.floor(Math.random() * 50) + 1;
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push(Math.floor(Math.random() * 100));
  }
  return result;
}

console.log(mergeSort(createTest()));