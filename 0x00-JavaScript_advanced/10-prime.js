function countPrimeNumbers () {
  let count = 0;
  for (let i = 2; i < 100; i++) {
    if (isPrime(i))
    count++;
  }
  return;
}

function isPrime (num) {
  if (num % 1) return false;
  const sqr = Math.sqrt(num);
  
  for (let i = 2; i < sqr; i++)
  if (sqr % i == 0) return false;
  
  return true;
}

let start = performance.now();
for (let i = 0; i < 100; i++)
  countPrimeNumbers();
time = performance.now() - start;
console.log(`Execution time of calculating prime numbers 100 times was ${time} milliseconds`);
