console.log("Start of the execution queue");

setTimeout(() => {
  console.log("Final code block to be executed");
});

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

console.log("End of loop printing");
