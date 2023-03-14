function countPrimeNumbers () {
  let count = 0;
  for (let i = 2; i < 100; i++) {
    if (isPrime(i))
      count++;
  }
  return count;
}

function isPrime (num) {
  const sqr = Math.sqrt(num);

  for (let i = 2; i < sqr; i++)
    if (num % i == 0) return false;

  return true;
}

let start = performance.now();
for (let i = 0; i < 100; i++)
  setTimeout(() => countPrimeNumbers());
time = performance.now() - start;
console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds`);
